"use server"

import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

const prisma = new PrismaClient()

export type Credentials = {
  username: string
  password: string
}

export type User = {
  id: number
  username: string
  mail: string
  password: string
  createdDate: Date
}

const handler = NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials: Credentials) {
        const user: User | null = await prisma.users.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password,
          },
        })

        return user
      },
    }),
  ],
})

export default handler
