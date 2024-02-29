import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubId = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set!")
}

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
}
