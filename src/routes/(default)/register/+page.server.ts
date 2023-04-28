import { LuciaError } from 'lucia-auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth, validateAndCreateSession } from '$lib/server/auth';
import type { FormErrorData } from '$lib/components/forms/types';
import prisma from '$lib/server/prisma';
import formSchema from './form-schema';

export const load: PageServerLoad = async ({ locals }) => {
  // if the user is already logged in, redirect to home page?
  if (await locals.auth.validate()) {
    throw redirect(302, '/');
  }
};

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();

    const parseResult = formSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parseResult.success) {
      return fail<FormErrorData>(400, { errorMessages: ['Invalid form data'] });
    }

    try {
      const { userId } = await auth.createUser({
        primaryKey: {
          providerId: 'email',
          providerUserId: parseResult.data.email,
          password: parseResult.data.password
        },
        attributes: undefined
      });
      await prisma.user.create({
        data: {
          id: userId,
          firstName: parseResult.data.firstName,
          lastName: parseResult.data.lastName,
          email: parseResult.data.email
        }
      });
      const userSession = await validateAndCreateSession(
        parseResult.data.email,
        parseResult.data.password
      );
      locals.auth.setSession(userSession);
    } catch (error) {
      if (error instanceof LuciaError) {
        if (error.message === 'AUTH_DUPLICATE_KEY_ID') {
          return fail<FormErrorData>(400, {
            namedErrors: { email: ['Email already in use'] }
          });
        }
      }

      console.error(error);
      return fail<FormErrorData>(500, {
        errorMessages: ['Unknown server error occurred']
      });
    }
  }
} satisfies Actions;
