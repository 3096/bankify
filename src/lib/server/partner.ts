import { ACCOUNT_DEFAULT_NAMES } from '$lib/account';
import prisma from './prisma';

export const getPartnerAccount = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      accounts: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });
  const account = user.accounts.find((account) => account.accountType === 'INTERNAL');
  if (account) {
    return account;
  }
  return await prisma.account.create({
    data: {
      accountType: 'INTERNAL',
      userId: userId,
      accountName: ACCOUNT_DEFAULT_NAMES['INTERNAL']
    }
  });
};
