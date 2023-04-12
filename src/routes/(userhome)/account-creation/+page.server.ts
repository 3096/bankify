import type { Actions, PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import type { FormResultData } from '$lib/components/forms/types';
import { formSchema, type FormResult } from './form';
import { fail, type ActionFailure } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import type { AccountType } from '@prisma/client';
import { ACCOUNT_DEFAULT_NAMES } from '$lib/account';

export const load: PageServerLoad = async ({ locals }) => {
  await validateSessionAndGetUserOrThrowRedirect(locals);
};

export const actions = {
  default: async ({ request, locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);

    const parseResult = formSchema.safeParse(
      Object.fromEntries((await request.formData()).entries())
    );
    if (!parseResult.success) {
      return fail<FormResultData>(400, { errorMessages: ['Invalid form data'] });
    }

    const accountName =
      parseResult.data.accountName ||
      ACCOUNT_DEFAULT_NAMES[parseResult.data.accountType as AccountType];
    const account = await prisma.account.create({
      data: {
        accountType: parseResult.data.accountType as AccountType,
        userId: userId,
        accountName: accountName
      }
    });

    return { accountNumber: account.accountNumber };
  }
} satisfies Actions<FormResult | ActionFailure<FormResultData>>;
