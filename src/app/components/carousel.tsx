"use client"

import { useMemo, useCallback, useState, useEffect } from "react"
import { data } from "@/data/carouselData"
import CarouselCard from "@/components/carouselCard"
import SlideItem from "@/components/UI/slideItem"
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
    <div className="flex w-80 relative">
      <SlideItem type="previous" handleSlideChange={handleSlideChange} />
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
                "p-1 border-2 border-heaven-white rounded-full transition-colors duration-1000 ease-in-out",
                {
                  "bg-heaven-white": displayedCard === item.id,
                },
              )}
            ></div>
          ))}
        </div>
      </div>
      <SlideItem type="next" handleSlideChange={handleSlideChange} />
    </div>
  )
}
