import Carousel from "@/src/components/carousel"
import Footer from "@/src/components/layout/footer"
import TodaySchedules from "@/src/components/todaySchedules"

export default function Home() {
  return (
    <div className="flex justify-center mt-32">
      <Carousel />
      <TodaySchedules />
      <Footer />
    </div>
  )
}
