import type { Transaction, TransactionType } from '@prisma/client';
import prisma from './prisma';
import { ACCOUNT_TYPES_BALANCE_CAN_BE_NEGATIVE } from './account';

export class TransactionErrorInsufficientFunds extends Error {}

export const createTransaction = async (
  senderAccountNumber: number,
  recipientAccountNumber: number,
  amount: number,
  transactionType: TransactionType,
  description: string
) => {
  const senderAccount = await prisma.account.findUniqueOrThrow({
    where: { accountNumber: senderAccountNumber }
  });
  if (
    senderAccount.currentBalance < amount &&
    !ACCOUNT_TYPES_BALANCE_CAN_BE_NEGATIVE.includes(senderAccount.accountType)
  ) {
    throw new TransactionErrorInsufficientFunds('Insufficient funds');
  }

  const recipientAccount = await prisma.account.findUniqueOrThrow({
    where: { accountNumber: recipientAccountNumber }
  });

  await prisma.$transaction([
    prisma.account.update({
      where: { accountNumber: senderAccount.accountNumber },
      data: {
        currentBalance: {
          decrement: amount
        }
      }
    }),
    prisma.account.update({
      where: { accountNumber: recipientAccount.accountNumber },
      data: {
        currentBalance: {
          increment: amount
        }
      }
    }),
    prisma.transaction.create({
      data: {
        amount,
        senderAccountNumber: senderAccount.accountNumber,
        recipientAccountNumber: recipientAccount.accountNumber,
        description,
        transactionType
      }
    })
  ]);
};

export const getAccountTransactions = (accountWithTransactions: {
  sentTransactions: Transaction[];
  receivedTransactions: Transaction[];
}) =>
  [
    ...accountWithTransactions.sentTransactions,
    ...accountWithTransactions.receivedTransactions
  ].sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime());
