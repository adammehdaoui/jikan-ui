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
    <div className="mt-32">
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
            <div
              className="justify-self-center w-60 mt-16 ml-2 sm:ml-10 text-heaven-black"
              key={item.mal_id}
            >
              <AnimeCard url={item.images.jpg.image_url} title={item.title} />
              <div className="mt-2">
                <h2 className="text-xl font-extrabold">
                  {index + 1} : {item.title}
                </h2>
                <h3 className="text-md italic text-heaven-low-gray">
                  Japanese :{" "}
                  {item.titles.find((item) => item.type === "Japanese")?.title}
                </h3>
                <div className="mt-6">
                  <a
                    href={item.url}
                    className="p-3 text-heaven-white bg-heaven-blue rounded-lg"
                  >
                    MyAnimeList details
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
