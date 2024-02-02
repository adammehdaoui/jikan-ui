import Logo from "@/components/layout/logo"
import { Lato } from "next/font/google"

const lato = Lato({ subsets: ["latin"], weight: ["900"] })

export default function Brand() {
  return (
    <div className="flex mt-1" id="brand">
      <Logo />
      <h1>
        <p className={`mt-4 pr-4 text-heaven-white text-xl ${lato.className}`}>
          jikanUI
        </p>
      </h1>
    </div>
  )
}
