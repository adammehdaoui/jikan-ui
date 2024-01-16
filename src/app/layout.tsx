import React from "react"
import Header from "./components/header"
import "./globals.css"
import { Lato } from "next/font/google"

const lato = Lato({subsets: ["latin"], weight: ["300"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={lato.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}