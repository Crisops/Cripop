import type { ResultSearch } from '@/types/database.types'
import type { Genders, Genre, MovieWithValidGenders } from '@/types/genders'

// Función optimizada que solo devuelve id y nombre de cada película/serie con sus géneros
export const getOptimizedResultWithGenders = (
  searchResult: ResultSearch,
  genresList: Genders,
): MovieWithValidGenders[] => {
  const genreMap = new Map(genresList.genres.map((genre) => [genre.id, { id: genre.id, name: genre.name }]))

  return searchResult.results.map((item) => ({
    id: item.id,
    genres: item.genre_ids
      .map((genreId) => genreMap.get(genreId))
      .filter((genre): genre is Genre => genre !== undefined),
  }))
}
