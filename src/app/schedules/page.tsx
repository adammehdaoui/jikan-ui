import { Suspense } from "react"
import Loading from "@/schedules/loading"
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