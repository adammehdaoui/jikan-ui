import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const name = credentials.name
        const password = credentials.password

        if (name === "admin" && password === "admin") {
          return { name: "admin", password: "admin" }
        }

        return null
      },
    }),
  ],
})
