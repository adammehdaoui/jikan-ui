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
        className="w-full h-80 shadow-sm transition duration-300 ease-out hover:scale-110 cursor-pointer rounded-3xl"
        placeholder="blur"
        blurDataURL={url}
        loading="lazy"
      />
    </div>
  )
}
