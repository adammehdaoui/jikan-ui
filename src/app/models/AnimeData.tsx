import TitleData from "@/models/TitleData"

export default interface AnimeData {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  titles: Array<TitleData>
  title: string
}
