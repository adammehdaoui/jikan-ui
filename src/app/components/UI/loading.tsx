import Spinner from "@/components/UI/spinner"

export default function Loading() {
  return (
    <div className="flex justify-center w-full mt-40 fixed">
      <Spinner />
    </div>
  )
}
