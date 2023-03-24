import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ locals }) => {
//   const { user, session } = await locals.validateUser();
//   if (!session) {
//     // not logged in, gtfo
//     // throw redirect(302, '/');
//   }
//   return {
//     props: {
//       user: await prisma.user.findUniqueOrThrow({
//         where: { id: user.userId }
//       })
//     }
//   };
// };
