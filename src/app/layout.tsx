import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import "@/globals.css"
import { Metadata } from "next"
import { Lato } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

const lato = Lato({ subsets: ["latin"], weight: ["400"] })

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
    <html lang="fr" className={lato.className}>
      <body>
        <Header />
        <div>{children}</div>
        <Toaster richColors position="bottom-right" />
        <Footer />
      </body>
    </html>
  )
}
