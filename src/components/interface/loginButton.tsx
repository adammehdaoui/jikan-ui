"use client"

import { signIn } from "next-auth/react"
import React from "react"

export default function LoginButton() {
  return (
    <button
      className="mt-4 p-3 bg-heaven-blue text-heaven-white rounded-xl text-lg"
      onClick={async () => {
        await signIn("github", { callbackUrl: "/dashboard" })
      }}
    >
      Log in
    </button>
  )
}
