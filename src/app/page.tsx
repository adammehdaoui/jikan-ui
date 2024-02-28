import Carousel from "@/components/carousel"
import MainContainer from "@/components/interface/mainContainer"
import TodaySchedules from "@/components/todaySchedules"

export default function Home() {
  return (
    <div className="flex justify-center mt-32 md:mt-48">
      <MainContainer>
        <Carousel />
        <TodaySchedules />
      </MainContainer>
    </div>
  )
}
