"use client"

import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <button
      className="mt-4 w-full bg-blue-500"
      onClick={async () => {
        await signIn()
      }}
    >
      Log in
    </button>
  )
}
