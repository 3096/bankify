import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async ({ params }) => {
	return {
		props: {
			users: await prisma.user.findMany()
		}
	};
}) satisfies PageServerLoad;
