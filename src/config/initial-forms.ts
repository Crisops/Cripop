import { getLocalTimeZone, today } from '@internationalized/date'
import { SortDate } from '@/types/filter-options'
import type { FormFiltersOptions, FormSearch } from '@/utils/validate-rules-form'

export const initialFormSearch: FormSearch = {
  search: '',
  type: 'movie',
}

// Función helper para crear formulario inicial según el tipo
export const createInitialFormFilters = <T extends FormSearch['type']>(contentType: T): FormFiltersOptions<T> => {
  if (contentType === 'movie') {
    return {
      primary_release_date: {
        gte: today(getLocalTimeZone()).subtract({ days: 1 }),
        lte: today(getLocalTimeZone()).add({ days: 1 }),
      },
      with_runtime: {
        gte: 0,
        lte: 0,
      },
      with_genres: '',
      with_original_language: '',
      sort_by: SortDate.POPULARITY_DESC,
    } as FormFiltersOptions<T>
  } else {
    return {
      first_air_date: {
        gte: today(getLocalTimeZone()).subtract({ days: 1 }),
        lte: today(getLocalTimeZone()).add({ days: 1 }),
      },
      with_runtime: {
        gte: 0,
        lte: 0,
      },
      with_genres: '',
      with_original_language: '',
      sort_by: SortDate.POPULARITY_DESC,
    } as FormFiltersOptions<T>
  }
}
