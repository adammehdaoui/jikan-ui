"use client"

import { getConnected } from "@/../pages/api/session"
import { signIn } from "next-auth/react"

export default function Page() {
  const session = getConnected()

  console.log(session)

  if (JSON.stringify(session).length > 2) {
    return (
      <div>
        <h1>Welcome, {JSON.stringify(session, null, 2)}!</h1>
      </div>
    )
  }

  return (
    <>
      <button
        className="mt-4 w-full bg-blue-500"
        onClick={async () => {
          await signIn()
        }}
      >
        Log in
      </button>

      <div className="mt-4 w-full bg-blue-500"></div>
    </>
  )
}
