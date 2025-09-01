import type { Episode } from '@/types/episode'

export type DetailsSeason = {
  _id: string
  air_date: Date
  episodes: Episode[]
  episode: Episode
  name: string
  overview: string
  id: number
  poster_path: string
  season_number: number
  vote_average: number
}
