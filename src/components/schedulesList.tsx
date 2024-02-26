"use client"

import { fetchSchedules } from "@/api/jikan/schedules"
import AnimeCard from "@/components/animeCard"
import AnimeData from "@/models/AnimeData"
import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

export default function SchedulesList() {
  const [data, setData] = useState<AnimeData[]>([])

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("EN-en", { weekday: "long" }).toLowerCase(),
    [],
  )

  useEffect(() => {
    toast.info("Animes scheduled for today")
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchSchedules(today, 1, 15)
      setData(data)

      if (data.length === 0) {
        toast.warning("No animes scheduled for today")
      }
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
    <div className="flex flex-wrap justify-center w-full mt-14 pb-10">
      {data.map((item, index) => (
        <div
          className="italic justify-self-center w-60 mt-16 ml-2 sm:ml-10 text-heaven-black"
          key={item.mal_id}
        >
          <AnimeCard url={item.images.jpg.image_url} title={item.title} />
          <div className="mt-2">
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
          </div>
        </div>
      ))}
    </div>
  )
}
