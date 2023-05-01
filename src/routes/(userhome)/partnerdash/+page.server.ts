import type { Actions, PageServerLoad } from './$types';
import {
  createNewApiKeyAndInvalidateOldApiKeys,
  validateSessionAndGetUserOrThrowRedirect
} from '$lib/server/auth';
import type { FormResult } from './form';
import type { ActionFailure } from '@sveltejs/kit';
import type { FormErrorData } from '$lib/components/forms/types';
import {
  getPartnerAccountWithTransactions,
  userIdIsPartnerOrThrowRedirect
} from '$lib/server/partner';
import { getAccountTransactions } from '$lib/server/transaction';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  await userIdIsPartnerOrThrowRedirect(userId);
  const partnerAccount = await getPartnerAccountWithTransactions(userId);
  return { ...partnerAccount, transactions: getAccountTransactions(partnerAccount) };
};

export const actions = {
  default: async ({ locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
    await userIdIsPartnerOrThrowRedirect(userId);
    return { apikey: await createNewApiKeyAndInvalidateOldApiKeys(userId) };
  }
} satisfies Actions<FormResult | ActionFailure<FormErrorData>>;
