import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "unknown",
      clientSecret: "unknown",
    }),
  ],
})

export default handler
