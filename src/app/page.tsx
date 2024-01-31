import Carousel from "@/components/carousel"
import Today from "@/components/today"

export default function Page() {
  return (
    <div className="flex justify-center mt-32">
      <Carousel />
      <Today />
    </div>
  )
}
