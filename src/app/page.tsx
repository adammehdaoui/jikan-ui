import { authConfig } from "@/src/app/api/auth/[...nextauth]/route"
import LoginButton from "@/src/app/loginButton"
import LogoutButton from "@/src/app/logoutButton"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session = await getServerSession(authConfig)

  if (session) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Welcome {JSON.stringify(session)}</h1>
        <LogoutButton />
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginButton />
    </div>
  )
}
