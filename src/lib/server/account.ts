import type { AccountType } from '@prisma/client';
import prisma from './prisma';
import { auth } from './auth';

export const ACCOUNT_TYPES_BALANCE_CAN_BE_NEGATIVE: AccountType[] = ['INTERNAL', 'CREDIT', 'LOAN'];

export const getCheckProcessingAccount = async () => {
  const CHECK_PROCESSING_ACCOUNT_RECORD = 'CHECK_PROCESSING_ACCOUNT';
  const checkProcessingAccountRecord = await prisma.runtimeMeta.findUnique({
    where: { key: CHECK_PROCESSING_ACCOUNT_RECORD }
  });
  if (checkProcessingAccountRecord) {
    return await prisma.account.findUniqueOrThrow({
      where: { accountNumber: parseInt(checkProcessingAccountRecord.value) }
    });
  }

  const { userId } = await auth.createUser({ primaryKey: null, attributes: undefined });
  await prisma.user.create({
    data: {
      id: userId,
      firstName: 'INTERNAL CHECK PROCESSING',
      email: 'check-processing@bankify.internal'
    }
  });
  const account = await prisma.account.create({
    data: {
      accountType: 'INTERNAL',
      userId: userId,
      accountName: 'INTERNAL CHECK PROCESSING'
    }
  });
  await prisma.runtimeMeta.create({
    data: {
      key: CHECK_PROCESSING_ACCOUNT_RECORD,
      value: account.accountNumber.toString()
    }
  });
  return account;
};
