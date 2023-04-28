
import type { Account, User } from '@prisma/client';
import { z } from 'zod';

export type EmailFormResult = {user: User}
export type AccountFormResult = {account: Account}

export const emailFormSchema = z.object({
  email: z.string().email()
})

export const accountFormSchema = z.object({
  accountNumber: z.coerce.number().int().gt(0, 'Please enter a valid account number')
})
