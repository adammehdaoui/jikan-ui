"use client"

import React, { useReducer, useEffect, useCallback, useMemo } from "react"
import { Unbounded } from "next/font/google"
import AnimeData from "@/models/AnimeData"
import { SchedulesActions } from "@/models/SchedulesActions"
import fetchSchedules from "@/api/jikan/schedules"
import { toast } from "sonner"

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500"] })

type SchedulesObject = {
  data: AnimeData[]
  loading: boolean
}

const reducer = (state: SchedulesObject, action: SchedulesActions) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload }

    case "UPDATE_LOADING":
      return { ...state, loading: action.payload }
  }
}

export default function TodaySchedules() {
  const [schedulesState, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
  })

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("EN-en", { weekday: "long" }).toLowerCase(),
    [],
  )

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchSchedules(today)
      dispatch({ type: "UPDATE_DATA", payload: data })
      dispatch({ type: "UPDATE_LOADING", payload: false })
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
    <div
      className={`bg-heaven-green text-heaven-white ml-20 w-2/3 rounded-2xl hidden xl:block ${schedulesState.loading ? "animate-pulse" : null}`}
    >
      <div className="flex justify-center">
        <h2 className={`mt-6 text-xl ${unbounded.className}`}>TODAY</h2>
      </div>
      <div className="mt-6 w-5/6 mx-auto">
        {schedulesState.data.map((item, index) => (
          <div key={`${item.title}—${index}`} className="mt-3">
            <span className={unbounded.className}>{item.title}</span> at{" "}
            <span className={unbounded.className}>{item.broadcast.string}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
