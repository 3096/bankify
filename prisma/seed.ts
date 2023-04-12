import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const createMany = await prisma.user.createMany({
    data: [
      
    ],
    skipDuplicates: true, // Skip 'Bobo'
  })

async function main() {};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })