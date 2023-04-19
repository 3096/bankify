import type { AccountType } from '@prisma/client';

export const ACCOUNT_TYPE_NAMES: Record<AccountType, string> = {
  CHECKING: 'Checking',
  SAVINGS: 'Savings',
  CREDIT: 'Credit',
  LOAN: 'Loan',
  INTERNAL: 'Internal'
};

export const ACCOUNT_DEFAULT_NAMES: Record<AccountType, string> = {
  CHECKING: 'Premier Plus Checking',
  SAVINGS: 'Velocity Savings',
  CREDIT: 'Elite Rewards Credit Card',
  LOAN: 'PersonalFlex Loan',
  INTERNAL: 'Internal Account'
};
