import Link from "next/link"
import Brand from "@/components/layout/brand"

export default function Header() {
  return (
    <header className="flex fixed w-full bg-heaven-blue pb-2">
      <div className="flex flex-wrap ml-5 sm:ml-20">
        <Link href="/">
          <Brand />
        </Link>
        <div className="flex flex-wrap mt-3 text-lg text-heaven-white">
          <div className="ml-5">
            <Link href="/top">
              Top
            </Link>
          </div>
          <div className="ml-5">
            <Link href="/schedules">
              Schedules
            </Link>
          </div>
          <div className="ml-5">
            <Link href="/about">
              About
            </Link>
          </div>
        </div> 
      </div>
    </header>
  )
}
