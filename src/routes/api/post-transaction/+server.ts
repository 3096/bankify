import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { validateApiKeyAndGetUser } from '$lib/server/auth';
import { LuciaError } from 'lucia-auth';
import { z } from 'zod';
import { accountNumberSchema, transactionTypeSchema } from '$lib/schemas';
import { getPartnerAccount, userIdIsPartner } from '$lib/server/partner';
import type { TransactionType } from '@prisma/client';
import { createTransaction } from '$lib/server/transaction';

const validationSchema = z.object({
  amount: z.coerce.number().multipleOf(0.01, 'amount cannot be a fraction of a cent'),
  accountnum: accountNumberSchema(),
  type: transactionTypeSchema,
  description: z
    .string()
    .min(1, 'description cannot be empty')
    .max(256, 'description cannot be longer than 256 characters')
});

export const POST = (async ({ url }) => {
  const apikey = url.searchParams.get('apikey');
  if (!apikey) {
    throw error(400, 'No apikey provided');
  }
  let userId;
  try {
    userId = await validateApiKeyAndGetUser(apikey);
  } catch (e) {
    if (e instanceof LuciaError) {
      if (e.message === 'AUTH_INVALID_PASSWORD' || e.message === 'AUTH_INVALID_KEY_ID') {
        throw error(401, 'Unauthorized');
      }
    }
    console.error(e);
    throw error(500);
  }
  if (!userId || !(await userIdIsPartner(userId))) {
    console.error('User is not a partner', userId);
    throw error(401, 'Unauthorized');
  }

  const paramParseResult = validationSchema.safeParse(
    Object.fromEntries(url.searchParams.entries())
  );
  if (!paramParseResult.success) {
    throw error(400, paramParseResult.error.message);
  }

  const {
    accountnum: otherAccountNumber,
    type: transactionType,
    amount: amountSigned,
    description
  } = paramParseResult.data;

  if (amountSigned === 0) {
    throw error(400, 'amount cannot be 0');
  }

  let amount = amountSigned;
  let recipientAccountNumber = otherAccountNumber;
  let senderAccountNumber = (await getPartnerAccount(userId)).accountNumber;
  if (amount < 0) {
    amount = -amount;
    recipientAccountNumber = senderAccountNumber;
    senderAccountNumber = otherAccountNumber;
  }

  await createTransaction(
    senderAccountNumber,
    recipientAccountNumber,
    amount,
    transactionType as TransactionType,
    description
  );

  return new Response();
}) satisfies RequestHandler;
