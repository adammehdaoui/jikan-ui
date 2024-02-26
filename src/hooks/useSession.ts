"use server"

import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export async function useSession() {
  const session = await getServerSession(authConfig)

  return session
}
