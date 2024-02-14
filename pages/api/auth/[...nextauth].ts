import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"

const authConfig = {
  providers: [],
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions

export default NextAuth(authConfig)
