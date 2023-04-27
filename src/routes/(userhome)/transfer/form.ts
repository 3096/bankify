import { z } from 'zod';

export const formSchema = z.object({
  amount: z.coerce
    .number()
    .min(0.01, 'Please enter an amount')
    .multipleOf(0.01, 'Amount cannot be a fraction of a cent'),
  senderAccountNumber: z.coerce.number().int().gt(0, 'Please select an account'),
  recipientAccountNumber: z.coerce.number().int().gt(0, 'Please enter a valid account number')
});
