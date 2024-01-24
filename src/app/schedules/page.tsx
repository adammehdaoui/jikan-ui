import SchedulesList from "@/components/schedulesList"
import Loading from "@/components/UI/loading"
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
