import AnimeData from "@/models/AnimeData"

export type SchedulesActions =
  | { type: "UPDATE_DATA"; payload: AnimeData[] }
  | { type: "UPDATE_LOADING"; payload: boolean }
