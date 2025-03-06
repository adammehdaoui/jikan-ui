"use server"

export async function fetchTop(page: number) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=bypopularity&filter=airing&sfw=true&page=${page}`,
      { method: "GET", next: { revalidate: 3600 } },
    )
    const data = await response.json()

    return data.data
  } catch (error) {
    throw new Error(
      "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
    )
  }
}
