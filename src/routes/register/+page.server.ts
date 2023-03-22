import { auth, validateAndCreateSession } from '$lib/server/lucia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { LuciaError } from 'lucia-auth';
import type { PageServerLoad } from './$types';
import formSchema from './form-schema';

export const load: PageServerLoad = async ({ locals }) => {
  // if the user is already logged in, redirect to home page?
  if (await locals.validate()) {
    throw redirect(302, '/');
  }
};

export const actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();

    const parseResult = formSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parseResult.success) {
      return fail(400, { message: 'Invalid form data' });
    }

    try {
      await auth.createUser({
        primaryKey: {
          providerId: 'email',
          providerUserId: parseResult.data.email,
          password: parseResult.data.password
        },
        attributes: {
          firstName: parseResult.data.firstName,
          lastName: parseResult.data.lastName,
          email: parseResult.data.email
        }
      });
      const userSession = await validateAndCreateSession(
        parseResult.data.email,
        parseResult.data.password
      );
      locals.setSession(userSession);
    } catch (error) {
      if (error instanceof LuciaError) {
        if (error.message === 'AUTH_DUPLICATE_KEY_ID') {
          return fail(400, { message: 'Email already in use' });
        }
      }

      console.error(error);
      return fail(500, { message: 'Unknown server error occurred' });
    }
  }
} satisfies Actions;
