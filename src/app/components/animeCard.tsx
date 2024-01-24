import Image from "next/image"

export default function AnimeCard({
  url,
  title,
}: {
  url: string
  title: string
}) {
  return (
    <Image
      src={url}
      width={1920}
      height={1080}
      alt={`image of ${title}`}
      className="mt-5 w-11/12 shadow-2xl"
    />
  )
}
