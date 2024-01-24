import TopList from "@/components/topList"
import Loading from "@/schedules/loading"
import { Suspense } from "react"

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TopList />
      </Suspense>
    </>
  )
}
