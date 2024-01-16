import Image from "next/image"

export default function Logo () {
  return (<>
            <Image
              src="/logo.png" 
              width="50"
              height="30"
              alt="logo"
            />
          </>)
}