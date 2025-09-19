import type { FormSearch } from '@/utils/validate-rules-form'

export type PreviewLists = 'now_playing' | 'popular' | 'top_rated'

export const tmdbUrls = {
  images: {
    original: 'https://image.tmdb.org/t/p/original',
    w300: 'https://image.tmdb.org/t/p/w300',
    w500: 'https://image.tmdb.org/t/p/w500',
    w1280: 'https://image.tmdb.org/t/p/w1280',
    w92: 'https://image.tmdb.org/t/p/w92',
    includeLanguage: (type: FormSearch['type'], id: number) => `/${type}/${id}/images?include_image_language=en,es`,
    posters: (type: FormSearch['type'], id: number) => `/${type}/${id}/images?include_image_language=en,es`,
  },
  search: (type: FormSearch['type'], query: string, page: number) =>
    `/search/${type}?query=${query}&include_adult=true&language=es&page=${page}`,
  genres: (type: 'movie' | 'tv') => `/genre/${type}/list?language=es`,
  lists: {
    buildUrl: (type: FormSearch['type'], list: PreviewLists, page?: number) =>
      `/${type}/${list}?language=es&page=${page ?? 1}`,
  },
  discover: (type: FormSearch['type'], filters?: string) =>
    `/discover/${type}${filters}&include_adult=false&include_video=true&language=es`,
  details: (type: FormSearch['type'], id: number) => `/${type}/${id}?language=es`,
  detailsWithVideos: (type: FormSearch['type'], id: number) => `/${type}/${id}?append_to_response=videos&language=es`,
  detailsSeason: (type: Exclude<FormSearch['type'], 'movie'>, id: number, seasonNumber: number) =>
    `/${type}/${id}/season/${seasonNumber}?language=es`,
  detailsEpisode: (
    type: Exclude<FormSearch['type'], 'movie'>,
    id: number,
    seasonNumber: number,
    episodeNumber: number,
  ) => `/${type}/${id}/season/${seasonNumber}/episode/${episodeNumber}?language=es`,
  videos: {
    all: (type: FormSearch['type'], id: number) => `/${type}/${id}/videos?include_video_language=es,en&language=es`,
    season: {
      episodes: (type: Exclude<FormSearch['type'], 'movie'>, id: number, seasonNumber: number, episodeNumber: number) =>
        `/${type}/${id}/season/${seasonNumber}/episode/${episodeNumber}/videos?include_video_language=es,en&language=es`,
    },
  },
}
