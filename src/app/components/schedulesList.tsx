"use client"

import fetchSchedules from "@/api/schedules"
import AnimeData from "@/models/AnimeData"
import Image from "next/image"
import React, { useState, useEffect, useCallback, useMemo } from "react"
import { toast } from "sonner"

export default function SchedulesList() {
  const [data, setData] = useState<AnimeData[]>([])

  const today = useMemo(
    () => new Date().toLocaleDateString("EN-en", { weekday: "long" }).toLowerCase()
  , [])

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
    <div className="ml-5 sm:ml-20 mt-24">
      <div className="flex flex-wrap w-full static">
        {data
          .map((item, index) => (
            <div className="italic mt-16 ml-8 w-1/4" key={item.mal_id}>
              <h2 className="text-lg font-extrabold">{index + 1} : {item.title}</h2>
              <h3 className="text-md font-bold">
                Japanese :{" "}
                {item.titles.find((item) => item.type === "Japanese")?.title}
              </h3>
              <h3 className="text-heaven-red">
                { item.broadcast.string != "Unknown" ? "Broadcast on : " + item.broadcast.string : "Unknown broadcast from Jinkan" }
              </h3>
              <Image
                src={item.images.jpg.large_image_url}
                width={1920}
                height={1080}
                alt={`image of ${item.title}`}
                className="mt-5 w-11/12 shadow-2xl"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
