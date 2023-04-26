import type { Actions, PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { formSchema } from './form';
import type { FormResultData } from '$lib/components/forms/types';
import { fail, type ActionFailure } from '@sveltejs/kit';
import { TransactionErrorInsufficientFunds, createTransaction } from '$lib/server/transaction';

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

    const { senderAccountNumber, recipientAccountNumber, amount } = parseResult.data;

    const senderAccount = await prisma.account.findUniqueOrThrow({
      where: { accountNumber: senderAccountNumber }
    });
    if (senderAccount.userId !== userId) {
      return fail<FormResultData>(403, { errorMessages: ['Forbidden'] });
    }

    try {
      await createTransaction(
        senderAccountNumber,
        recipientAccountNumber,
        amount,
        'TRANSFER',
        'Transfer'
      );
    } catch (e) {
      if (e instanceof TransactionErrorInsufficientFunds) {
        return fail<FormResultData>(400, { errorMessages: ['Insufficient funds'] });
      }
      console.error(e);
      return fail<FormResultData>(500, { errorMessages: ['Internal server error'] });
    }
  }
} satisfies Actions<void | ActionFailure<FormResultData>>;
