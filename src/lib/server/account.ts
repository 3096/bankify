import type { AccountType } from '@prisma/client';

export const ACCOUNT_TYPES_BALANCE_CAN_BE_NEGATIVE: AccountType[] = ['INTERNAL', 'CREDIT', 'LOAN'];
