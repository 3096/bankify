import type { PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import { getAccountTransactions } from '$lib/server/transaction';

export const load: PageServerLoad = async ({ locals, params }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);

  const accountNumber = parseInt(params.accountNumber);
  if (isNaN(accountNumber)) {
    throw redirect(302, '/');
  }

  const account = await prisma.account.findUnique({
    where: { accountNumber: accountNumber },
    include: {
      sentTransactions: true,
      receivedTransactions: true
    }
  });
  if (!account) {
    throw redirect(302, '/');
  }
  if (account.userId !== userId) {
    throw redirect(302, '/');
  }

  return {
    ...account,
    transactions: getAccountTransactions(account)
  };
};
