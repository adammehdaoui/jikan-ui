import React from "react"
import "./globals.css"
import { Lato } from "next/font/google"

const lato = Lato({subsets: ["latin"], weight: ["400"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={lato.className}>
      <body>{children}</body>
    </html>
  )
}