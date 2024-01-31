"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Unbounded } from "next/font/google"
import AnimeData from "@/models/AnimeData"
import fetchSchedules from "@/api/schedules"
import { toast } from "sonner"

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] })

export default function Today() {
  const [data, setData] = useState<AnimeData[]>([])
  const [loading, setLoading] = useState(true)

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("EN-en", { weekday: "long" }).toLowerCase(),
    [],
  )

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchSchedules(today)
      setData(data)
      setLoading(false)
    } catch (error) {
      toast.error(
        "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
      )
    }
  }, [today])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div
      className={`bg-heaven-green text-heaven-white ml-20 w-2/3 rounded-2xl hidden xl:block ${loading ? "animate-pulse" : null}`}
    >
      <div className="flex justify-center">
        <h2 className={`mt-3 text-xl ${unbounded.className}`}>TODAY</h2>
      </div>
      <div className="mt-6 w-5/6 mx-auto">
        {data.map((item, index) => (
          <div key={`${item.title}—${index}`} className="mt-3">
            <span className={unbounded.className}>{item.title}</span> at{" "}
            <span className={unbounded.className}>{item.broadcast.string}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
