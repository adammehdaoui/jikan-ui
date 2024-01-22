import { Suspense } from "react"
import Loading from "./loading"
import TopList from "@/components/topList"

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TopList />
      </Suspense>
    </>
  )
}