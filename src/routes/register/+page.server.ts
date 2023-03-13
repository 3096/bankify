import { auth } from '$lib/server/lucia';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import formSchema from './form-schema';

export const load: PageServerLoad = async ({ locals }) => {
  // if the user is already logged in, redirect to home page?
  if (await locals.validate()) {
    throw redirect(302, '/');
  }
};

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const parseResult = formSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!parseResult.success) {
      return fail(400, { message: 'Invalid form data' });
    }

    try {
      await auth.createUser({
        key: {
          providerId: 'email',
          providerUserId: parseResult.data.email,
          password: parseResult.data.password
        },
        attributes: {
          name: parseResult.data.name,
          email: parseResult.data.email
        }
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: JSON.stringify(error) });
    }

    throw redirect(302, '/');
  }
} satisfies Actions;
