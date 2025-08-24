import type { FormSearch } from '@/utils/validate-rules-form'

export type PreviewLists = 'now_playing' | 'popular' | 'top_rated' | 'upcoming'

export const tmdbUrls = {
  images: {
    original: 'https://image.tmdb.org/t/p/original',
    w500: 'https://image.tmdb.org/t/p/w500',
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
  details: (type: FormSearch['type'], id: number) => `/${type}/${id}?language=es`,
}
