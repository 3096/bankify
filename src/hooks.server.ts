import { handleHooks as handleHooksLucia } from '@lucia-auth/sveltekit';
import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handleHooks: Handle = async ({ resolve, event }) => {
  return resolve(event);
};

export const handle: Handle = sequence(handleHooksLucia(auth), handleHooks);
