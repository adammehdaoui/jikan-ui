import Image from "next/image"
import { Unbounded } from "next/font/google"

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] })

export default function CarouselCard({
  animeInfo,
  path,
  hidden,
}: {
  animeInfo: { title: string; link: string; description: string }
  path: string
  hidden: boolean
}) {
  const { title, link, description } = animeInfo

  return (
    <div className={`relative ${hidden ? "hidden" : null}`}>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-heaven-blue via-transparent rounded-2xl shadow-2xl">
        <div className="ml-8 mt-8 text-heaven-white">
          <h2 className={`text-2xl ${unbounded.className}`}>{title}</h2>
          <div className="mt-5">
            <a
              href={link}
              className="bg-heaven-white text-heaven-blue p-1 rounded"
            >
              Watch
            </a>
            <p className="text-sm w-3/4 mt-5">{description.slice(0, 100)}...</p>
          </div>
        </div>
      </div>
      <Image
        src={`/assets/backgrounds/${path}.jpeg`}
        height={1080}
        width={1920}
        className="rounded-2xl"
        alt={`background image of ${title}`}
        priority={true}
      />
    </div>
  )
}
