import Image from "next/image"

export default function Logo() {
  return (
    <div className="mt-1">
      <Image 
        src="/logo.png" 
        width={1920} 
        height={1080} 
        alt="logo" 
        priority={true}
        className="h-10 w-10" 
      />
    </div>
  )
}
