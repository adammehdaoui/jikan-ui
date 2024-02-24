import Image from "next/image"
import React from "react"

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-10 bg-slate-300 w-full absolute bottom-0 text-heaven-white space-y-3">
      <div>© 2024 JikanUI is an educational project by Adam Mehdaoui</div>
      <a
        href="https://github.com/adammehdaoui/jikan_next"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/svg/github-mark/github-mark-white.svg"
          width={40}
          height={40}
          alt="github mark"
        />
      </a>
    </div>
  )
}
