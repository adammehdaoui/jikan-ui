import Link from "next/link"
import Brand from "./brand"

export default function Header() {
  return (
    <header className="flex bg-heaven-blue pb-2">
      <div className="flex ml-20">
        <Link href="/">
          <Brand />
        </Link>
        <div className="flex mt-3 text-lg text-heaven-white">
          <div className="ml-5">
            <Link href="/main">
              Main
            </Link>
          </div>
          <div className="ml-5">
            <Link href="/main">
              Top
            </Link>
          </div>
          <div className="ml-5">
            <Link href="/main">
              Schedules
            </Link>
          </div>
          <div className="ml-5">
            <Link href="/main">
              About
            </Link>
          </div>
        </div> 
      </div>
    </header>
  )
}
