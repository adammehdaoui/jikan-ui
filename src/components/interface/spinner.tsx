import Image from "next/image"

export default function Spinner() {
  return (
    <Image
      src="/assets/svg/spinner.svg"
      className="animate-spin"
      width={60}
      height={60}
      alt="spinner"
    />
  )
}
