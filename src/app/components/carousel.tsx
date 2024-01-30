"use client"

import { useMemo, useCallback, useState, useEffect } from "react"
import { data } from "@/data/carouselData"
import CarouselCard from "@/components/carouselCard"
import Image from "next/image"
import { clsx } from "clsx"

export default function Carousel() {
  const [displayedCard, setDisplayedCard] = useState(1)

  const idList = useMemo(() => data.map((item) => item.id), [])
  const minId = useMemo(() => Math.min(...idList), [idList])
  const maxId = useMemo(() => Math.max(...idList), [idList])

  const handleSlideChange = useCallback(
    (type: "previous" | "next") => {
      if (type === "previous") {
        minId < displayedCard
          ? setDisplayedCard(displayedCard - 1)
          : setDisplayedCard(maxId)
      } else if (type === "next") {
        maxId > displayedCard
          ? setDisplayedCard(displayedCard + 1)
          : setDisplayedCard(minId)
      }
    },
    [displayedCard, minId, maxId],
  )

  useEffect(() => {
    const intervalID = setInterval(() => handleSlideChange("next"), 5000)

    return () => clearInterval(intervalID)
  }, [handleSlideChange])

  return (
    <div className="flex justify-center mt-32 w-full">
      <div className="flex w-80 relative shadow-2xl">
        <div>
          <button
            aria-label="switch to previous"
            className="left-0 transition ease-in-out duration-300 absolute w-8 right-0 top-1/2 z-20 hover:scale-150"
          >
            <Image
              src="/assets/svg/switch.svg"
              width={500}
              height={500}
              alt="switch"
              className="rotate-180"
              onClick={() => handleSlideChange("previous")}
            />
          </button>
        </div>
        <div className="flex">
          {data.map((item) => (
            <div key={item.id}>
              <CarouselCard
                animeInfo={{
                  title: item.title,
                  link: item.link,
                  description: item.description,
                }}
                path={item.image}
                hidden={item.id === displayedCard ? false : true}
              />
            </div>
          ))}
          <div className="absolute flex justify-evenly w-1/4 bottom-10 left-5 z-10">
            {data.map((item, index) => (
              <div
                key={`${item.title}_${index}`}
                className={clsx(
                  "p-1 border-2 border-heaven-white rounded-full",
                  {
                    "bg-heaven-white": displayedCard === item.id,
                  },
                )}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <button
            aria-label="switch to next"
            className="transition ease-in-out duration-300 absolute w-8 right-0 top-1/2 z-20 hover:scale-150"
          >
            <Image
              src="/assets/svg/switch.svg"
              width={500}
              height={500}
              alt="switch"
              onClick={() => handleSlideChange("next")}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
