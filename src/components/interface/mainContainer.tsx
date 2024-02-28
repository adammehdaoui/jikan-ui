import React from "react"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:mx-10 lg:justify-center">
      {children}
    </div>
  )
}
