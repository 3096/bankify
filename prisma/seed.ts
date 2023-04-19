import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const createManyUsers = await prisma.user.createMany({
  data: [
    { id: '095105', email: 'bob@prisma.io', firstName: 'Bob', lastName: 'Davies', isManager: false, dateOfBirth: '03/12/1986', phoneNumber: 5551029403},
    { id: '095106', email: 'diane@prisma.io', firstName: 'Diane', lastName: 'Davies', isManager: false, dateOfBirth: '31/05/1991', phoneNumber: 5553749502},
    { id: '095107', email: 'max@prisma.io', firstName: 'Max', lastName: 'Rockwell', isManager: true, dateOfBirth: '21/02/1941', phoneNumber: 5559832683},
    { id: '095108', email: 'harry@prisma.io', firstName: 'Harry', lastName: 'Bowie', isManager: false, dateOfBirth: '25/04/1986', phoneNumber: 5551693133},
    { id: '095109', email: 'ricardo@prisma.io', firstName: 'Ricardo', lastName: 'Perez', isManager: true, dateOfBirth: '12/08/1991', phoneNumber: 5552321454},
    { id: '095110', email: 'akshay@prisma.io', firstName: 'Akshay', lastName: 'Gupta', isManager: false, dateOfBirth: '21/05/1965', phoneNumber: 5558260171},
    { id: '095111', email: 'kevin@prisma.io', firstName: 'Kevin', lastName: 'Stone', isManager: false, dateOfBirth: '10/01/1941', phoneNumber: 5557674892},
    { id: '095112', email: 'mary_anne@prisma.io', firstName: 'Mary Anne', lastName: 'Petri', isManager: false, dateOfBirth: '27/04/1969', phoneNumber: 5552784641},
    { id: '095113', email: 'sonya@prisma.io', firstName: 'Sonya', lastName: 'Singh', isManager: true, dateOfBirth: '17/02/1945', phoneNumber: 5555571214},
    { id: '095114', email: 'carrie@prisma.io', firstName: 'Carrie', lastName: 'Smith', isManager: false, dateOfBirth: '18/12/1975', phoneNumber: 5554006684},
    { id: '095115', email: 'nigel@prisma.io', firstName: 'Nigel', lastName: 'Ratburn', isManager: false, dateOfBirth: '14/12/1979', phoneNumber: 5553807706},
    { id: '095116', email: 'rachel@prisma.io', firstName: 'Rachel', lastName: 'Greene', isManager: false, dateOfBirth: '06/04/1984', phoneNumber: 5555727791},
    { id: '095117', email: 'maria@prisma.io', firstName: 'Maria', lastName: 'Maria', isManager: false, dateOfBirth: '10/09/1993', phoneNumber: 5552384783},
    { id: '095118', email: 'jimmy@prisma.io', firstName: 'Jimmy', lastName: 'Neutron', isManager: false, dateOfBirth: '05/06/2003', phoneNumber: 5550484081},
    { id: '095119', email: 'dwayne@prisma.io', firstName: 'Dwayne', lastName: 'Johnson', isManager: false, dateOfBirth: '24/08/1941', phoneNumber: 5551144317},
    { id: '095120', email: 'carla@prisma.io', firstName: 'Carla', lastName: 'Brookes', isManager: false, dateOfBirth: '04/07/1944', phoneNumber: 5553615430},
    { id: '095121', email: 'julie@prisma.io', firstName: 'Julie', lastName: 'Sweets', isManager: false, dateOfBirth: '20/07/1950', phoneNumber: 5554464484},
    { id: '095122', email: 'homie@prisma.io', firstName: 'Homer', lastName: 'Simpson', isManager: false, dateOfBirth: '05/06/1971', phoneNumber: 5552099989},
    { id: '095123', email: 'kyle@prisma.io', firstName: 'Kyle', lastName: 'Nguyen', isManager: false, dateOfBirth: '14/04/1983', phoneNumber: 5555811525},
    { id: '095124', email: 'johnny@prisma.io', firstName: 'Johnny', lastName: 'Cadwell', isManager: false, dateOfBirth: '31/10/1950', phoneNumber: 5555858047},
    { id: '095125', email: 'krista@prisma.io', firstName: 'Krista', lastName: 'Hills', isManager: true, dateOfBirth: '03/05/1953', phoneNumber: 5556098192},
    { id: '095126', email: 'levar@prisma.io', firstName: 'LeVar', lastName: 'Burton', isManager: false, dateOfBirth: '26/08/1955', phoneNumber: 5556393836},
    { id: '095127', email: 'hugh@prisma.io', firstName: 'Hugh', lastName: 'Neutron', isManager: false, dateOfBirth: '20/05/1983', phoneNumber: 5550892770},
    { id: '095128', email: 'jessica@prisma.io', firstName: 'Jessica', lastName: 'Stone', isManager: true, dateOfBirth: '24/02/1989', phoneNumber: 5551219499},
    { id: '095129', email: 'robert@prisma.io', firstName: 'Robert', lastName: 'Johnson', isManager: false, dateOfBirth: '23/10/1943', phoneNumber: 5556571273},
    { id: '095130', email: 'jerry@prisma.io', firstName: 'Jerry', lastName: 'Seinfeld', isManager: false, dateOfBirth: '24/02/1962', phoneNumber: 5550207403},
    { id: '095131', email: 'malcolm@prisma.io', firstName: 'Malcolm', lastName: 'Wilkinson', isManager: false, dateOfBirth: '02/04/1978', phoneNumber: 5556831270},
    { id: '095132', email: 'jenny@prisma.io', firstName: 'Jenny', lastName: 'Ortega', isManager: false, dateOfBirth: '29/05/1989', phoneNumber: 5555180045},
    { id: '095133', email: 'carl@prisma.io', firstName: 'Carl', lastName: 'Bell', isManager: false, dateOfBirth: '08/07/1997', phoneNumber: 5551414935},
    { id: '095134', email: 'bob_smith@prisma.io', firstName: 'Bob', lastName: 'Smith', isManager: false, dateOfBirth: '30/09/1967', phoneNumber: 5550445286},
  ],
  skipDuplicates: true, // Skip Duplicates
})

const getUserOne = await prisma.user.findUnique({
  where: {
    id: '095106',
  },
})

const getUserTwo = await prisma.user.findUnique({
  where: {
    id: '095117',
  },
})

const getUserThree = await prisma.user.findUnique({
  where: {
    id: '095119',
  },
})

const getUserFour = await prisma.user.findUnique({
  where: {
    id: '095129',
  },
})

const getUserFive = await prisma.user.findUnique({
  where: {
    id: '095113',
  },
})

const createManyAccounts = await prisma.account.createMany({
  data: [
    //{accountType: CHECKING, user: getUserOne, userId: getUserOne?.id},
  ],
  skipDuplicates: true, // Skip Duplicates
})

const createManyTransactions = await prisma.transaction.createMany({
  data: [
    
  ],
  skipDuplicates: true, // Skip Duplicates
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