import { Suspense } from "react"
import Loading from "./loading"
import TopList from "@/components/toplist"

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TopList />
      </Suspense>
    </>
  )
}