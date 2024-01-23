import { Suspense } from "react"
import Loading from "@/components/UI/loading"
import SchedulesList from "@/components/schedulesList"

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SchedulesList />
      </Suspense>
    </>
  )
}