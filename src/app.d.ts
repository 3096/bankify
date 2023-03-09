// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	// let prisma: PrismaClient;
	namespace NodeJS {
		interface Global {
			prisma: PrismaClient;
		}
	}
}

export {};
