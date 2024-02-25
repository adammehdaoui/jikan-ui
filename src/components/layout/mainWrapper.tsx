"use client"

import Header from "@/components/layout/header"
import { useVisible } from "@/hooks/useVisible"
import { clsx } from "clsx"
import React from "react"

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { visible, changeVisible } = useVisible()

  return (
    <>
      <Header changeVisible={changeVisible} />
      <div className={clsx(!visible && "brightness-50 bg-black")}>
        {children}
      </div>
    </>
  )
}
