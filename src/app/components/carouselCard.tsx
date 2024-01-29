import Image from "next/image"
import { Unbounded } from "next/font/google"

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] })

export default function CarouselCard({
  title,
  path,
  hidden,
}: {
  title: string
  path: string
  hidden: boolean
}) {
  return (
    <div className={`relative ${unbounded.className}`}>
      <Image
        src={`/assets/backgrounds/${path}.jpeg`}
        height={1080}
        width={1920}
        alt={`background image of ${title}`}
        className={`w-full ${hidden === true ? "hidden" : null}`}
        loading="eager"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-heaven-blue via-transparent ${hidden === true ? "hidden" : null}`}
      >
        <h2 className="text-heaven-white text-2xl ml-8 mt-8">{title}</h2>
      </div>
    </div>
  )
}
