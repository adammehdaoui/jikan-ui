import Image from "next/image"

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-10 bg-slate-300 w-full text-heaven-white text-center h-fit mt-20 sm:mt-52">
      <div>© 2024 JikanUI is an educational project by Adam Mehdaoui</div>
      <a
        href="https://github.com/adammehdaoui/jikan_next"
        target="_blank"
        rel="noreferrer"
        className="mt-3"
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
