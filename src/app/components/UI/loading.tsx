import Spinner from "@/components/UI/spinner"

export default function Loading() {
  return (
    <div className="flex w-full justify-center mt-20 ml-20 fixed">
      <Spinner />
    </div>
  )
}
