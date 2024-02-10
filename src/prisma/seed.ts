import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.users.create({
      data: {
        username: "noborder",
        mail: "noborder94130@gmail.com",
        password: "123",
      },
    })
  } catch (error) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
