import Carousel from "@/components/carousel"
import MainContainer from "@/components/interface/mainContainer"
import Footer from "@/components/layout/footer"
import TodaySchedules from "@/components/todaySchedules"

export default function Page() {
  return (
    <div className="flex flex-col relative mt-32 md:mt-48">
      <MainContainer>
        <Carousel />
        <TodaySchedules />
      </MainContainer>
      <Footer />
    </div>
  )
}
