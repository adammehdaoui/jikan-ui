import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import LogoutButton from "@/components/interface/logoutButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authConfig)

  if (!session) {
    return redirect("/")
  }

  return (
    <div className="flex justify-center mt-44">
      <div className="flex flex-col">
        <h1>Dashboard {session && "connected"} </h1>
        <LogoutButton />
      </div>
    </div>
  )
}
