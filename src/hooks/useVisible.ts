"use client"

import { useCallback, useState } from "react"

export function useVisible() {
  const [visible, setVisible] = useState(true)

  const changeVisible = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return { visible, changeVisible }
}
