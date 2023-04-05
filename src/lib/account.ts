import type { AccountType } from '@prisma/client';

export const ACCOUNT_TYPE_NAMES: Record<AccountType, string | null> = {
  CHECKING: 'Checking',
  SAVINGS: 'Savings',
  CREDIT: 'Credit',
  LOAN: null
};
