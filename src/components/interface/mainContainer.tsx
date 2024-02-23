import React from "react"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex justify-center md:mt-20">{children}</div>
}
