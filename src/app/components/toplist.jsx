"use client"

import { useState, useEffect } from "react"
import Image from "next/image"  

export default function TopList() {
  const [data, setData] = useState([])

  function top() {
    fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=2", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    top()
  }, [])

  return (
    <div className="ml-5 flex flex-row">
      {data.map(item => (
        <span key={item.mal_id}>
          {item.mal_id}
          <Image
           src={item.images.jpg.small_image_url}
           width={50}
           height={50}
           alt="anime"
          />
        </span>
      ))}
    </div>
  )
}
