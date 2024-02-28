"use client"

import { signOut } from "next-auth/react"

export default function LoginButton() {
  return (
    <button
      className="mt-4 p-3 bg-heaven-blue text-heaven-white rounded-xl text-lg"
      onClick={async () => {
        await signOut()
      }}
    >
      Log out
    </button>
  )
}
