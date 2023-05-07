import type { Actions, PageServerLoad } from './$types';
import { fail, type ActionFailure } from '@sveltejs/kit';
import type { FormErrorData } from '$lib/components/forms/types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { createTransaction } from '$lib/server/transaction';
import { formSchema } from './form';
import { getCheckProcessingAccount } from '$lib/server/account';

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
  return { accounts: user.accounts };
};

export const actions = {
  default: async ({ request, locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);

    const parseResult = formSchema.safeParse(
      Object.fromEntries((await request.formData()).entries())
    );
    if (!parseResult.success) {
      return fail<FormErrorData>(400, { errorMessages: ['Invalid form data'] });
    }

    const { depositTo, amount } = parseResult.data;

    const checkProcessingAccount = await getCheckProcessingAccount();
    const depositToAccount = await prisma.account.findUniqueOrThrow({
      where: { accountNumber: depositTo }
    });
    if (depositToAccount.userId !== userId) {
      return fail<FormErrorData>(403, { errorMessages: ['Forbidden'] });
    }

    await createTransaction(
      checkProcessingAccount.accountNumber,
      depositToAccount.accountNumber,
      amount,
      'CHEQUE',
      'Check deposit'
    );
  }
} satisfies Actions<void | ActionFailure<FormErrorData>>;
