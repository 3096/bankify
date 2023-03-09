import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// if (process.env.NODE_ENV === 'development') {
// 	global.prisma = prisma;
// }

console.log(await prisma.user.findMany);

export { prisma };
