"use server"

export default async function fetchTop() {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&filter=airing&sfw=true",
      { method: "GET" },
    )
    const data = await response.json()

    return data.data
  } catch (error) {
    throw new Error(
      "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
    )
  }
}
