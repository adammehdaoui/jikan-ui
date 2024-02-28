import Image from "next/image"

export default function Arrow() {
  return (
    <Image
      src="/assets/svg/arrow.svg"
      width={20}
      height={20}
      alt="arrow"
      className="w-7 ml-4"
    />
  )
}
