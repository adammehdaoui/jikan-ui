import Image from "next/image"

export default function Spinner() {
  return (
    <div className="ml-5 mt-5">
      <Image src="/assets/svg/spinner.svg" className="animate-spin" width={60} height={60} alt="spinner" />
    </div>
  )
}