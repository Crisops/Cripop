import type { Movies } from '@/types/movies'
import type { Series } from '@/types/series'
import type { DetailsSeries as DetailsSeriesId } from '@/types/details-serie'
import type { DetailsMovieId } from '@/types/details-movie-id'
import type { DetailsSeason } from '@/types/data-season'

export interface DetailsSeriesSeasons extends DetailsSeriesId {
  currentSeason: DetailsSeason
  runtime: number
}

export type ResultSearch = Movies | Series
export type MediaDetails = DetailsMovieId | DetailsSeriesId | DetailsSeriesSeasons
