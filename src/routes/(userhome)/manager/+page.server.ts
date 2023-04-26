import type { PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findMany();
  const trans = await prisma.transaction.findMany();

  // async function yolo(){
  //   return await prisma.transaction.findMany();
  // }

  return { user, trans };
};

