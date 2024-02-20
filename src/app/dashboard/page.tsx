import { authConfig } from "@/src/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authConfig)

  if (!session) {
    return redirect("/")
  }

  return (
    <div>
      <h1>Dashboard {session && "connected"} </h1>
    </div>
  )
}
