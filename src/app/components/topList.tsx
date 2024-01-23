"use client"

import React, { useState, useEffect, useCallback } from "react"
import { toast } from "sonner"
import AnimeData from "@/models/AnimeData"
import Image from "next/image"  

export default function TopList() {
  const [data, setData] = useState<AnimeData[]>([])
  const [search, setSearch] = useState<string>("")

  const top = useCallback(async () => {
    await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity&filter=airing&limit=10", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        res.data ? setData(res.data) : toast.error("Too many calls to Jikan API, please wait a few seconds and refresh the page.")
      })
  }, [])

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  useEffect(() => {
    top()
  }, [top])

  return (
    <div className="ml-20">
      <input 
        type="text" 
        placeholder="Search in top"
        className="border-2 border-heaven-blue rounded-md mt-24 p-2" 
        value={search} 
        onChange={e => handleSearch(e)} 
      />

      <div className="flex flex-wrap">
        {data?.filter(item  => item.title.toLowerCase().includes(search.toLowerCase()))
          .map(item => (
          <div className="italic mt-10 w-full" key={item.mal_id}>
            <h2 className="text-lg font-extrabold">{item.title}</h2>
            <h3 className="text-md font-bold">Japanese : {item.titles.find(item => item.type === "Japanese")?.title}</h3>
            <a href={item.url} className="text-heaven-blue">MyAnimeList details</a>
            <Image
            src={item.images.jpg.large_image_url}
            width={1920}
            height={1080}
            alt={`image of ${item.title}`}
            className="mt-5 w-1/6"
            />
          </div>
        ))}
      </div>

    </div>
  )
}
