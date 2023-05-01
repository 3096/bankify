import type { Actions, PageServerLoad } from './$types';
import {
  createNewApiKeyAndInvalidateOldApiKeys,
  validateSessionAndGetUserOrThrowRedirect
} from '$lib/server/auth';
import type { FormResult } from './form';
import type { ActionFailure } from '@sveltejs/kit';
import type { FormErrorData } from '$lib/components/forms/types';
import { getPartnerAccount, userIdIsPartnerOrThrowRedirect } from '$lib/server/partner';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  await userIdIsPartnerOrThrowRedirect(userId);
  return { partnerAccount: await getPartnerAccount(userId) };
};

export const actions = {
  default: async ({ locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
    await userIdIsPartnerOrThrowRedirect(userId);
    return { apikey: await createNewApiKeyAndInvalidateOldApiKeys(userId) };
  }
} satisfies Actions<FormResult | ActionFailure<FormErrorData>>;
