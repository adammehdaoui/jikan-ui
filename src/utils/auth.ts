import { prismaClientGlobal as prisma } from "@/utils/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text", // Make sure the type is correct based on your configuration
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const foundUser = await prisma.users.findUnique({
          where: {
            username: credentials.username,
          },
        })

        if (!foundUser || foundUser.password !== credentials.password) {
          return null
        }

        const user: User = {
          id: foundUser.id,
          username: foundUser.username,
          mail: foundUser.mail,
          createdDate: foundUser.createdDate,
        }

        return user as Awaitable<ReturnType<typeof PrismaAdapter>>
      },
    }),
  ],
}

type User = {
  id: number
  username: string
  mail: string
  createdDate: Date
}

type Awaitable<T> = T | Promise<T>
