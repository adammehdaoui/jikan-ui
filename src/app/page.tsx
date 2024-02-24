import Carousel from "@/components/carousel"
import Footer from "@/components/layout/footer"
import TodaySchedules from "@/components/todaySchedules"

export default function Home() {
  return (
    <div className="flex justify-center mt-32">
      <Carousel />
      <TodaySchedules />
      <Footer />
    </div>
  )
}
