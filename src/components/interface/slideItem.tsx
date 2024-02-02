import Image from "next/image"
import { clsx } from "clsx"
import { useCallback } from "react"

export default function SlideItem({
  type,
  handleSlideChange,
}: {
  type: "previous" | "next"
  handleSlideChange: Function
}) {
  {
    const itemLabel = useCallback((): string => {
      switch (type) {
        case "previous":
          return "switch to previous"

        case "next":
          return "switch to next"
      }
    }, [type])

    const item = itemLabel()

    return (
      <div>
        <button
          aria-label={item}
          className={clsx(
            "transition ease-in-out duration-300 absolute w-8 top-1/2 z-20 hover:scale-150",
            {
              "rotate-180 left-0": type === "previous",
              "right-0": type === "next",
            },
          )}
        >
          <Image
            src="/assets/svg/switch.svg"
            width={500}
            height={500}
            alt="switch"
            onClick={() => handleSlideChange(type)}
          />
        </button>
      </div>
    )
  }
}
