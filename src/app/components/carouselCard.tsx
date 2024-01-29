import Image from "next/image"

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
    <div className="bg-gradient-to-r from-heaven-blue to-heaven-blue">
      <Image
        src={`/assets/backgrounds/${path}.jpeg`}
        height={1080}
        width={1920}
        alt={`background image of ${title}`}
        className={`w-full ${hidden === true ? "hidden" : null}`}
        loading="eager"
      />
    </div>
  )
}
