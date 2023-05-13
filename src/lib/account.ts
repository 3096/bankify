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

export const ACCOUNT_TYPE_FLIP_BALANCE: Record<AccountType, number> = {
  CHECKING: 1,
  SAVINGS: 1,
  CREDIT: -1,
  LOAN: -1,
  INTERNAL: 1
};
