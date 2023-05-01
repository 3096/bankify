import { accountNumberSchema, amountSchema } from '$lib/schemas';
import { z } from 'zod';

export const formSchema = z.object({
  amount: amountSchema('Please enter an amount'),
  senderAccountNumber: accountNumberSchema('Please select an account'),
  recipientAccountNumber: accountNumberSchema('Please enter a valid account number')
});
