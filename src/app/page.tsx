import { authConfig } from "@/pages/api/auth/[...nextauth]"
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
    <>
      <LoginButton />
    </>
  )
}
