"use client"

import { fetchTop } from "@/app/api/jikan/top"
import AnimeCard from "@/components/animeCard"
import Spinner from "@/components/interface/spinner"
import AnimeData from "@/models/AnimeData"
import { TopActions } from "@/models/TopActions"
import React, { useCallback, useEffect, useReducer } from "react"
import { useInView } from "react-intersection-observer"
import { toast } from "sonner"

type TopObject = {
  data: AnimeData[]
  search: string
  page: number
}

const reducer = (state: TopObject, action: TopActions) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload }

    case "UPDATE_SEARCH":
      return { ...state, search: action.payload }

    case "UPDATE_PAGE":
      return { ...state, page: action.payload }
  }
}

export default function TopList() {
  const [topState, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    page: 1,
  })

  const { ref, inView } = useInView()

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "UPDATE_SEARCH", payload: e.target.value })
  }, [])

  const fetchData = useCallback(async () => {
    try {
      if (topState.data.length < 300) {
        const res = await fetchTop(topState.page)
        dispatch({ type: "UPDATE_DATA", payload: [...topState.data, ...res] })
        dispatch({ type: "UPDATE_PAGE", payload: topState.page + 1 })
      } else {
        toast.error("Jikan API limited to 300 for top list")
      }
    } catch (error) {
      toast.error(
        "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
      )
    }
  }, [topState])

  useEffect(() => {
    toast.info("Top page ranks animes by popularity")
  }, [])

  useEffect(() => {
    if (topState.data.length === 300) {
      toast.warning("Top list is limited to 300 animes")
    }
  }, [topState.data])

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
          value={topState.search}
          onChange={(e) => handleSearch(e)}
          name="search in top"
        />
      </div>

      <div className="flex flex-wrap justify-center w-full">
        {topState.data
          ?.filter((item) =>
            item.title.toLowerCase().includes(topState.search.toLowerCase()),
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
      {topState.data.length < 300 && (
        <div ref={ref} className="flex justify-center mt-10">
          <Spinner />
        </div>
      )}
    </div>
  )
}
