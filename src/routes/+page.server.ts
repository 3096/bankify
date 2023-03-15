import { validateAndCreateSession } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  // if the user is already logged in, redirect to dashboard
  if (await locals.validate()) {
    throw redirect(302, '/dashboard');
  }
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData.entries());
    try {
      const userSession = await validateAndCreateSession(email.toString(), password.toString());
      if (!userSession) {
        return fail(401, { message: 'Invalid email or password' });
      }
      locals.setSession(userSession);
    } catch (error) {
      console.error(error);
      return fail(500, { message: 'Unknown server error occurred' });
    }
  }
};
