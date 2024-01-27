"use client"

import { useCallback, useState } from "react"
import { data } from "@/data/carouselData"
import CarouselCard from "@/components/carouselCard"
import Image from "next/image"

export default function Carousel() {
  const [displayedCard, setDisplayedCard] = useState(1)

  const handleClick = useCallback(
    (type: "previous" | "next") => {
      type === "previous"
        ? setDisplayedCard(displayedCard - 1)
        : setDisplayedCard(displayedCard + 1)
    },
    [displayedCard],
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
        {data.map((item) => (
          <div key={item.id}>
            <CarouselCard
              title={item.title}
              path={item.image}
              hidden={item.id === displayedCard ? false : true}
            />
          </div>
        ))}
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
