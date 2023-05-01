import type { PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      accounts: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });
  return { user };
};
