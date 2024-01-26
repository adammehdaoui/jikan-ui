"use client"

import fetchSchedules from "@/api/schedules"
import AnimeData from "@/models/AnimeData"
import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"
import AnimeCard from "./animeCard"

export default function SchedulesList() {
  const [data, setData] = useState<AnimeData[]>([])

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("EN-en", { weekday: "long" }).toLowerCase(),
    [],
  )

  useEffect(() => {
    toast.info("Animes scheduled for today")
  }, [today])

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchSchedules()
      setData(data)
    } catch (error) {
      toast.error(
        "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
      )
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="flex flex-wrap justify-center mt-24">
      {data.map((item, index) => (
        <div className="italic mt-16 ml-8 w-auto" key={item.mal_id}>
          <h2 className="text-xl font-extrabold">
            {index + 1} : {item.title}
          </h2>
          <h3 className="text-md font-bold">
            Japanese :{" "}
            {item.titles.find((item) => item.type === "Japanese")?.title}
          </h3>
          <h3 className="text-heaven-red">
            {item.broadcast.string != "Unknown"
              ? "Broadcast on : " + item.broadcast.string
              : "Unknown broadcast from Jikan"}
          </h3>
          <AnimeCard url={item.images.jpg.large_image_url} title={item.title} />
        </div>
      ))}
    </div>
  )
}
