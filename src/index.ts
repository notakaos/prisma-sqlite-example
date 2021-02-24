import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function prepare(): Promise<void> {
  const allUsers = await prisma.user.findMany()
  if (allUsers.length === 0) {
    await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@example.com',
        posts: {
          create: { title: 'Hello, World' },
        },
        profile: {
          create: { bio: 'Lorem Ipsum' }
        }
      },
    })
  }
}

async function main(): Promise<void> {
  await prepare()

  const allUsers = await prisma.user.findMany()
  console.log(JSON.stringify(allUsers, null, 2))
}

main()
  .catch((e) => {
    throw e
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect()
  })
