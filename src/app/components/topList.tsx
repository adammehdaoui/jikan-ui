"use client"

import fetchTop from "@/api/top"
import AnimeCard from "@/components/animeCard"
import AnimeData from "@/models/AnimeData"
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
    toast.info("Top page ranks animes by popularity")
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="mt-24">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search in top"
          className="border-2 border-heaven-blue rounded-md p-2 shadow-lg"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className="flex flex-wrap justify-center w-full">
        {data
          ?.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((item, index) => (
            <div className="italic mt-16 ml-10" key={item.mal_id}>
              <h2 className="text-2xl font-extrabold">
                {index + 1} : {item.title}
              </h2>
              <h3 className="text-md font-bold">
                Japanese :{" "}
                {item.titles.find((item) => item.type === "Japanese")?.title}
              </h3>
              <a href={item.url} className="text-heaven-blue">
                MyAnimeList details
              </a>
              <AnimeCard
                url={item.images.jpg.large_image_url}
                title={item.title}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
