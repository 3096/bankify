// lib/server/lucia.ts
import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from './prisma';
import { sveltekit } from 'lucia-auth/middleware';
import { redirect } from '@sveltejs/kit';

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit()
});

export type Auth = typeof auth;

export const validateAndCreateSession = async (email: string, password: string) => {
  const key = await auth.useKey('email', email, password);
  const session = await auth.createSession(key.userId);
  return session;
};

export const validateSessionAndGetUserOrThrowRedirect = async (
  locals: App.Locals,
  redirectTo = '/'
) => {
  const { user, session } = await locals.auth.validateUser();
  if (!session) {
    throw redirect(302, redirectTo);
  }
  return user.userId;
};
