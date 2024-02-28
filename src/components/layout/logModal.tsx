import LoginButton from "@/components/interface/loginButton"
import LogoutButton from "@/components/interface/logoutButton"
import { useSession } from "@/contexts/sessionContext"
import { clsx } from "clsx"

export default function LogModal({ visible }: { visible: boolean }) {
  const { session } = useSession()

  return (
    <div
      className={clsx(
        "bg-white p-80 absolute left-1/2 top-1/2 tranform -translate-x-1/2 -translate-y-1/2 rounded-xl",
        { "opacity-0": visible },
      )}
    >
      {session ? (
        <div className="flex flex-col">
          <LogoutButton />
          <p className="mt-4">You're connected as {session.user?.name}</p>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  )
}
