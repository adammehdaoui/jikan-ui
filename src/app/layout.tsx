import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import "@/app/globals.css"
import MainWrapper from "@/components/layout/mainWrapper"
import { SessionProvider } from "@/contexts/sessionContext"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { Poppins } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] })

export const metadata: Metadata = {
  title: "JikanUI",
  description:
    "JikanUI is a web interface for Jikan, the unofficial MyAnimeList API.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialSession = await getServerSession(authConfig)

  return (
    <html lang="fr">
      <body className={poppins.className}>
        <SessionProvider session={initialSession}>
          <MainWrapper>{children}</MainWrapper>
        </SessionProvider>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
