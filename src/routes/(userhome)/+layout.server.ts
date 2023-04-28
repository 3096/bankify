import type { LayoutServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';

export const load: LayoutServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId }
  });
  return { user };
};
