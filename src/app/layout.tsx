import "@/src/app/globals.css"
import { Metadata } from "next"
import React from "react"
import { Toaster } from "sonner"

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
      <body>
        <div>{children}</div>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
