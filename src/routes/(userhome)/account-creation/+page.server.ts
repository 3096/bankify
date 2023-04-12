import type { Actions, PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import type { FormResultData } from '$lib/components/forms/types';
import { formSchema, type FormResult } from './form';
import { fail, type ActionFailure } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import type { AccountType } from '@prisma/client';

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

    const account = await prisma.account.create({
      data: {
        accountType: parseResult.data.accountType as AccountType,
        userId: userId
      }
    });

    return { accountNumber: account.accountNumber };
  }
} satisfies Actions<FormResult | ActionFailure<FormResultData>>;
