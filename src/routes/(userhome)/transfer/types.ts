import type { AccountType } from '@prisma/client';

export const ACCOUNT_TYPE_ALLOWED_TO_SEND: {
  [key in AccountType]: boolean;
} = {
  CHECKING: true,
  SAVINGS: true,
  CREDIT: false,
  LOAN: false,
  INTERNAL: false
};
