// lib/server/lucia.ts
import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from './prisma';
import { sveltekit } from 'lucia-auth/middleware';

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
