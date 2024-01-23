"use client"

import fetchTop from "@/api/top"
import AnimeData from "@/models/AnimeData"
import Image from "next/image"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"

export default function TopList() {
  const [data, setData] = useState<AnimeData[]>([])
  const [search, setSearch] = useState<string>("")

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchTop()
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
    <div className="ml-20">
      <input
        type="text"
        placeholder="Search in top"
        className="border-2 border-heaven-blue rounded-md mt-24 p-2"
        value={search}
        onChange={(e) => handleSearch(e)}
      />

      <div className="flex flex-wrap w-full">
        {data
          ?.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((item) => (
            <div className="italic mt-16 w-1/2" key={item.mal_id}>
              <h2 className="text-lg font-extrabold">{item.title}</h2>
              <h3 className="text-md font-bold">
                Japanese :{" "}
                {item.titles.find((item) => item.type === "Japanese")?.title}
              </h3>
              <a href={item.url} className="text-heaven-blue">
                MyAnimeList details
              </a>
              <Image
                src={item.images.jpg.large_image_url}
                width={1920}
                height={1080}
                alt={`image of ${item.title}`}
                className="mt-5 w-1/3"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
