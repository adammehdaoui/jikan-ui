import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const prisma = new PrismaClient()

type Credentials = {
  username: string
  password: string
}

const handler = NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials: Credentials) {
        const user = await prisma.users.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password,
          },
        })
      },
    }),
  ],
})

export default handler
