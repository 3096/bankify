// lib/server/lucia.ts
import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from './prisma';

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? 'DEV' : 'PROD'
});

export type Auth = typeof auth;

export const validateAndCreateSession = async (email: string, password: string) => {
  const key = await auth.useKey('email', email, password);
  if (!key) {
    return null;
  }
  const session = await auth.createSession(key.userId);
  return session;
};
