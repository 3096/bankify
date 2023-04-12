import type { Actions, PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { formSchema } from './form';
import type { FormResultData } from '$lib/components/forms/types';
import { fail, type ActionFailure } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      accounts: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });
  return { user };
};

export const actions = {
  default: async ({ request, locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);

    const parseResult = formSchema.safeParse(
      Object.fromEntries((await request.formData()).entries())
    );
    if (!parseResult.success) {
      return fail<FormResultData>(400, { errorMessages: ['Invalid form data'] });
    }

    const senderAccount = await prisma.account.findUniqueOrThrow({
      where: { accountNumber: parseResult.data.senderAccountNumber }
    });
    if (senderAccount.userId !== userId) {
      return fail<FormResultData>(403, { errorMessages: ['Forbidden'] });
    }
    if (senderAccount.currentBalance < parseResult.data.amount) {
      return fail<FormResultData>(400, { errorMessages: ['Insufficient funds'] });
    }

    const recipientAccount = await prisma.account.findUniqueOrThrow({
      where: { accountNumber: parseResult.data.recipientAccountNumber }
    });

    await prisma.$transaction([
      prisma.account.update({
        where: { accountNumber: senderAccount.accountNumber },
        data: {
          currentBalance: {
            decrement: parseResult.data.amount
          }
        }
      }),
      prisma.account.update({
        where: { accountNumber: recipientAccount.accountNumber },
        data: {
          currentBalance: {
            increment: parseResult.data.amount
          }
        }
      }),
      prisma.transaction.create({
        data: {
          amount: parseResult.data.amount,
          senderAccountNumber: senderAccount.accountNumber,
          recipientAccountNumber: recipientAccount.accountNumber,
          description: 'Transfer',
          transactionType: 'TRANSFER'
        }
      })
    ]);
  }
} satisfies Actions<void | ActionFailure<FormResultData>>;
