"use client"

import { useMemo, useCallback, useState } from "react"
import { data } from "@/data/carouselData"
import CarouselCard from "@/components/carouselCard"
import Image from "next/image"

export default function Carousel() {
  const [displayedCard, setDisplayedCard] = useState(1)

  const idList = useMemo(() => data.map((item) => item.id), [])
  const maxId = useMemo(() => Math.max(...idList), [idList])
  const minId = useMemo(() => Math.min(...idList), [idList])

  const handleClick = useCallback(
    (type: "previous" | "next") => {
      if (type === "previous" && minId < displayedCard) {
        setDisplayedCard(displayedCard - 1)
      } else if (type === "next" && maxId > displayedCard) {
        setDisplayedCard(displayedCard + 1)
      }
    },
    [displayedCard, minId, maxId],
  )

  return (
    <div className="flex justify-center mt-32 w-full">
      <div className="flex w-96">
        <button aria-label="switch to previous" className="w-14">
          <Image
            src="/assets/svg/switch.svg"
            width={500}
            height={500}
            alt="switch"
            className="rotate-180"
            onClick={() => handleClick("previous")}
          />
        </button>
        <div className="relative">
          <div>
            {data.map((item) => (
              <div key={item.id}>
                <CarouselCard
                  animeInfo={{ title: item.title, link: item.link }}
                  path={item.image}
                  hidden={item.id === displayedCard ? false : true}
                />
              </div>
            ))}
          </div>
          <div className="absolute z-20 bottom-5 left-5">
            <span className="p-1 border-2 border-heaven-white bg-heaven-white rounded-full"></span>
          </div>
          <div className="absolute z-20 bottom-5 left-10">
            <span className="p-1 border-2 border-heaven-white rounded-full"></span>
          </div>
        </div>
        <button aria-label="switch to next" className="w-14">
          <Image
            src="/assets/svg/switch.svg"
            width={500}
            height={500}
            alt="switch"
            onClick={() => handleClick("next")}
          />
        </button>
      </div>
    </div>
  )
}
