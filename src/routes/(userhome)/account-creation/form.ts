import { accountTypeSchema } from '$lib/schemas';
import { z } from 'zod';

export const formSchema = z.object({
  accountType: accountTypeSchema,
  accountName: z.string()
});

export type FormResult = { accountNumber: number };
