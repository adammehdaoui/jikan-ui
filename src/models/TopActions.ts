import AnimeData from "@/models/AnimeData"

export type TopActions =
  | { type: "UPDATE_DATA"; payload: AnimeData[] }
  | { type: "UPDATE_SEARCH"; payload: string }
  | { type: "UPDATE_PAGE"; payload: number }
