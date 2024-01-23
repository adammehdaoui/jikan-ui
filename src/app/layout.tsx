import React, { Suspense } from "react"
import { Toaster } from "sonner"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Loading from "@/components/UI/loading"
import "@/globals.css"
import { Lato } from "next/font/google"
import { Metadata } from "next"

const lato = Lato({subsets: ["latin"], weight: ["400"]})

export const metadata: Metadata = {
  title: "JikanUI",
  description: "JikanUI is a web interface for Jikan, the unofficial MyAnimeList API.",
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
        <Suspense fallback={<Loading />}>
          {children}
          <Toaster richColors closeButton position="top-right"/>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}