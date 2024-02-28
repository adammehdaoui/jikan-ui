import Carousel from "@/components/carousel"
import TodaySchedules from "@/components/todaySchedules"

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full lg:flex-row lg:justify-center mt-32 md:mt-48">
      <Carousel />
      <TodaySchedules />
    </div>
  )
}
