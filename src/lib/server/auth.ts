// lib/server/lucia.ts
import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from './prisma';
import { sveltekit } from 'lucia-auth/middleware';
import { redirect } from '@sveltejs/kit';
import base64url from 'base64url';

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

const APIKEY_LEN = 16;

export const createNewApiKeyAndInvalidateOldApiKeys = async (userId: string) => {
  const allUserKeys = await auth.getAllUserKeys(userId);
  const oldApiKeys = allUserKeys.filter((key) => key.providerId === 'apikey');
  await Promise.all(oldApiKeys.map((key) => auth.deleteKey('apikey', key.providerId)));

  const buffer = new Uint8Array(APIKEY_LEN * 2);
  crypto.getRandomValues(buffer);
  const apiKeyBuffer = Buffer.from(buffer);

  await auth.createKey(userId, {
    type: 'persistent',
    providerId: 'apikey',
    providerUserId: apiKeyBuffer.subarray(0, APIKEY_LEN).toString('base64'),
    password: apiKeyBuffer.subarray(APIKEY_LEN, APIKEY_LEN * 2).toString('base64')
  });

  return base64url(apiKeyBuffer);
};

export const validateApiKeyAndGetUser = async (apikey: string) => {
  const apiKeyBuffer = base64url.toBuffer(apikey);
  if (apiKeyBuffer.length != APIKEY_LEN) {
    return null;
  }
  const keyValidated = await auth.useKey(
    'apikey',
    apiKeyBuffer.subarray(0, APIKEY_LEN).toString('base64'),
    apiKeyBuffer.subarray(APIKEY_LEN, APIKEY_LEN * 2).toString('base64')
  );
  return keyValidated.userId;
};
