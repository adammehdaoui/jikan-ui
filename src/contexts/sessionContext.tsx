import type { Session } from "next-auth"
import React, { createContext, useContext } from "react"

type SessionContextType = {
  session: Session | null
  expires: string
}

const SessionContext = createContext<SessionContextType | null>(null)

export function SessionProvider({
  session,
  children,
}: {
  session: Session | null
  children: React.ReactNode
}) {
  const contextValue: SessionContextType = {
    session: session,
    expires: "",
  }

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider")
  }

  return context
}
