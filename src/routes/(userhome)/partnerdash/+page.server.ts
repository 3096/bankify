import type { Actions, PageServerLoad } from './$types';
import {
  createNewApiKeyAndInvalidateOldApiKeys,
  validateSessionAndGetUserOrThrowRedirect
} from '$lib/server/auth';
import type { FormResult } from './form';
import { redirect, type ActionFailure } from '@sveltejs/kit';
import type { FormErrorData } from '$lib/components/forms/types';
import prisma from '$lib/server/prisma';
import { getPartnerAccount } from '$lib/server/partner';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  // check if the user has partner access
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      accounts: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });
  if (!user.isPartner) {
    throw redirect(302, '/');
  }
  return { partnerAccount: getPartnerAccount(userId) };
};

export const actions = {
  default: async ({ locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
    return { apikey: await createNewApiKeyAndInvalidateOldApiKeys(userId) };
  }
} satisfies Actions<FormResult | ActionFailure<FormErrorData>>;
