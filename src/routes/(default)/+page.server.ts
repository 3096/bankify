import { validateAndCreateSession } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia-auth';
import type { Actions, PageServerLoad } from './$types';
import type { FormErrorData } from '$lib/components/forms/types';

export const load: PageServerLoad = async ({ locals }) => {
  // if the user is already logged in, redirect to dashboard
  if (await locals.auth.validate()) {
    throw redirect(302, '/dashboard');
  }
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData.entries());
    try {
      const userSession = await validateAndCreateSession(email.toString(), password.toString());
      locals.auth.setSession(userSession);
    } catch (error) {
      if (error instanceof LuciaError) {
        if (error.message === 'AUTH_INVALID_PASSWORD' || error.message === 'AUTH_INVALID_KEY_ID') {
          return fail<FormErrorData>(401, { errorMessages: ['Invalid email or password'] });
        }
      }
      console.error(error);
      return fail<FormErrorData>(500, { errorMessages: ['Unknown server error occurred'] });
    }
  }
};
