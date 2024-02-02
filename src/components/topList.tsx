"use client"

import { fetchTop } from "@/api/jikan/top"
import AnimeCard from "@/components/animeCard"
import Spinner from "@/components/interface/spinner"
import AnimeData from "@/models/AnimeData"
import React, { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { toast } from "sonner"

export default function TopList() {
  const [data, setData] = useState<AnimeData[]>([])
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView()

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const res = await fetchTop(page)
      setData([...data, ...res])
      setPage(page + 1)
    } catch (error) {
      toast.error(
        "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
      )
    }
  }, [page, data])

  useEffect(() => {
    toast.info("Top page ranks animes by popularity")
  }, [])

  useEffect(() => {
    if (inView) {
      fetchData()
    }
  }, [fetchData, inView])

  return (
    <div className="mt-32">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search in top"
          className="border-2 border-heaven-blue rounded-md p-2 shadow-lg"
          value={search}
          onChange={(e) => handleSearch(e)}
          name="search in top"
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
              key={`${item.mal_id}_${index}`}
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
      <div ref={ref} className="flex justify-center mt-10">
        <Spinner />
      </div>
    </div>
  )
}
