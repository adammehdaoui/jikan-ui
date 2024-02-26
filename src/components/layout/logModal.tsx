import LoginButton from "@/components/interface/loginButton"
import { clsx } from "clsx"

export default function logModal({ visible }: { visible: boolean }) {
  return (
    <div
      className={clsx(
        "bg-white p-80 absolute left-1/2 top-1/2 tranform -translate-x-1/2 -translate-y-1/2 rounded-xl",
        { "opacity-0": visible },
      )}
    >
      <LoginButton />
    </div>
  )
}
