import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.user.create({
      data: {
        name: "noborder",
        hashedPassword: "123",
      },
    })
  } catch (error) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
