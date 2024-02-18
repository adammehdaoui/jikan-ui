"use server"

import authConfig from "@/../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export async function getConnected() {
  "use server"

  return await getServerSession(authConfig)
}
