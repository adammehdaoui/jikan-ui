export default function Page() {
  return (
    <div className="flex justify-center">
      <form className="mt-10">
        <input type="email" className="border" placeholder="email" />
        <input type="password" className="border" placeholder="password" />
        <button type="submit"></button>
      </form>
    </div>
  )
}
