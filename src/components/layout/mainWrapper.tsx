"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import LogModal from "@/components/layout/logModal"
import { useVisible } from "@/hooks/useVisible"
import clsx from "clsx"
import React from "react"

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { visible, changeVisible } = useVisible()

  return (
    <>
      <div className={clsx(!visible && "blur")}>
        <Header changeVisible={changeVisible} />
        <div>{children}</div>
        <Footer />
      </div>
      <LogModal visible={visible} />
    </>
  )
}
