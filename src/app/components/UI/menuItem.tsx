import Link from "next/link"

export default function MenuItem({
  route,
  text,
}: {
  route: string
  text: string
}) {
  return (
    <div className="ml-5">
      <Link href={route}>{text}</Link>
    </div>
  )
}
