import type { AccountType } from '@prisma/client';

export const ACCOUNT_TYPE_NAMES: Record<AccountType, string | null> = {
  CHECKING: 'Checking',
  SAVINGS: 'Savings',
  CREDIT: 'Credit',
  LOAN: null
};

export const ACCOUNT_DEFAULT_NAMES: Record<AccountType, string> = {
  CHECKING: 'Prime Checking Plus',
  SAVINGS: 'Velocity Savings',
  CREDIT: 'Elite Rewards Credit Card',
  LOAN: 'PersonalFlex Loan'
};
