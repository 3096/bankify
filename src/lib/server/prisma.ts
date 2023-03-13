import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient;
}
global.__prisma ??= new PrismaClient();

export default global.__prisma;
