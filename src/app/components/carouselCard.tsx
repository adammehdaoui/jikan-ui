import Image from "next/image"
import { Unbounded } from "next/font/google"

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] })

export default function CarouselCard({
  animeInfo,
  path,
  hidden,
}: {
  animeInfo: { title: string; link: string }
  path: string
  hidden: boolean
}) {
  const { title, link } = animeInfo

  return (
    <div className="relative">
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
        <div className="ml-8 mt-8">
          <h2 className={`text-heaven-white text-2xl ${unbounded.className}`}>
            {title}
          </h2>
          <div className="mt-5">
            <a
              href={link}
              className="bg-heaven-white text-heaven-blue p-1 rounded"
            >
              Watch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
