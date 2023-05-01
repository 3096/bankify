import { z } from 'zod';
import { AccountType, TransactionType } from '@prisma/client';
import type { errorUtil } from 'zod/lib/helpers/errorUtil';

const accountTypes: string[] = Object.keys(AccountType);
export const accountTypeSchema = z.enum([accountTypes[0], ...accountTypes.slice(1)]);

const transactionTypes = Object.keys(TransactionType);
export const transactionTypeSchema = z.enum([transactionTypes[0], ...transactionTypes.slice(1)]);

export const accountNumberSchema = (errMsg: errorUtil.ErrMessage | undefined = undefined) =>
  z.coerce.number().int().gt(0, errMsg);

export const amountSchema = (errMsg: errorUtil.ErrMessage | undefined = undefined) =>
  z.coerce.number().min(0.01, errMsg).multipleOf(0.01, 'Amount cannot be a fraction of a cent');
