import { AccountType } from '@prisma/client';
import { z } from 'zod';

const accountTypes: string[] = Object.keys(AccountType);

export const formSchema = z.object({
  accountType: z.enum([accountTypes[0], ...accountTypes.slice(1)]),
  accountName: z.string()
});

export type FormResult = { accountNumber: number };
