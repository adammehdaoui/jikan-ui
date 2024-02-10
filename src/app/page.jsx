"use client"

import { signIn } from "next-auth/react"

export default function Page() {
  async function signInAction() {
    console.log("sign in")

    const signInResult = await signIn("credentials", {
      username: "noborder",
      password: "123",
      redirect: false,
    })

    if (signInResult == null) {
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    } else {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }
  }

  return (
    <div className="flex justify-center">
      <form className="mt-10">
        <input type="email" className="border" placeholder="email" />
        <input type="password" className="border" placeholder="password" />
        <button type="submit" onClick={signInAction}>
          Click
        </button>
      </form>
    </div>
  )
}
