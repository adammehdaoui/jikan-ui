import NextAuth from "next-auth/next"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "noborder",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const foundUser = await prisma.user.findUnique({
          where: {
            name: credentials?.username,
          },
        })

        if (!foundUser || foundUser.hashedPassword !== credentials?.password) {
          return null
        }

        const user: User = {
          id: foundUser.id,
          username: foundUser.name,
          password: foundUser.hashedPassword,
        }

        return user
      },
    }),
  ],
}

type User = {
  id: number
  username: string | null
  password: string | null
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
