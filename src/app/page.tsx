import { authConfig } from "@/src/app/api/auth/[...nextauth]/route"
import LoginButton from "@/src/app/loginButton"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session = await getServerSession(authConfig)

  if (session) {
    return (
      <>
        <h1>Welcome {JSON.stringify(session)}</h1>
      </>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginButton />
    </div>
  )
}
