import Carousel from "@/components/carousel"
import MainContainer from "@/components/interface/mainContainer"
import Footer from "@/components/layout/footer"
import TodaySchedules from "@/components/todaySchedules"

export default function Page() {
  return (
    <div className="flex flex-col items-center relative mt-32">
      <MainContainer>
        <Carousel />
        <TodaySchedules />
      </MainContainer>
      <Footer />
    </div>
  )
}
