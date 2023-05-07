import { accountNumberSchema, amountSchema } from '$lib/schemas';
import type { AccountType } from '@prisma/client';
import { z } from 'zod';

export const formSchema = z.object({
  amount: amountSchema('Please enter an amount'),
  depositTo: accountNumberSchema('Please select an account')
});

export const ACCOUNT_TYPE_ALLOWED_TO_DEPOSIT: Set<AccountType> = new Set(['CHECKING', 'SAVINGS']);
