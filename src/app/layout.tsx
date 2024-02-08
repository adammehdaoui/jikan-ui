import "@/app/globals.css"
import Header from "@/components/layout/header"
import { PrismaClient } from "@prisma/client"
import { Metadata } from "next"
import { Poppins } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

const prisma = new PrismaClient()

const newUser = await prisma.users.create({
  data: {
    username: "test",
    mail: "test",
    password: "test",
  },
})

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] })

export const metadata: Metadata = {
  title: "JikanUI",
  description:
    "JikanUI is a web interface for Jikan, the unofficial MyAnimeList API.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <div>{children}</div>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
