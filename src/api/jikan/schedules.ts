"use server"

export async function fetchSchedules(today: string) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/schedules?filter=${today}&sfw=true`,
      {
        method: "GET",
      },
    )
    const data = await response.json()

    return data.data
  } catch (error) {
    throw new Error(
      "Too many calls to Jikan API, please wait a few seconds and refresh the page.",
    )
  }
}
