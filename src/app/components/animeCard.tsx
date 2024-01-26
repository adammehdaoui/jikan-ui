import Image from "next/image"

export default function AnimeCard({
  url,
  title,
}: {
  url: string
  title: string
}) {
  return (
    <div className="mt-5">
      <Image
      src={url}
      width={720}
      height={1280}
      alt={`image of ${title}`}
      className="w-full h-80 shadow-sm transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
      placeholder="blur"
      blurDataURL={url}
      loading="lazy"
      />
    </div>
  )
}
