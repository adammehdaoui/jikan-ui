import SchedulesList from "@/components/schedulesList"
import Loading from "@/schedules/loading"
import { Suspense } from "react"

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SchedulesList />
      </Suspense>
    </>
  )
}
