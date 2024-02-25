import MainWrapper from "@/components/layout/mainWrapper"
import "@/src/app/globals.css"
import { Metadata } from "next"
import { Poppins } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

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
        <MainWrapper>{children}</MainWrapper>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
