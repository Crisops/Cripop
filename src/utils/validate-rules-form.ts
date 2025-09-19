import type { DateValue } from '@internationalized/date'
import type { RegisterOptions } from 'react-hook-form'
import { languages, type SortDate } from '@/types/filter-options'

export type FormSearch = {
  search: string | null
  type: 'movie' | 'tv'
}

export type FormFiltersOptions<T extends FormSearch['type'] = 'movie'> = {
  [K in T extends 'movie' ? 'primary_release_date' : 'first_air_date']: {
    gte: DateValue
    lte: DateValue
  }
} & {
  with_runtime: { gte: number; lte: number }
  with_genres: string[] | string
  with_original_language: string
  sort_by: SortDate
}

export type FormFiltersOptionsPartial<T extends FormSearch['type'] = 'movie'> = Partial<
  Omit<FormFiltersOptions<T>, T extends 'movie' ? 'primary_release_date' : 'first_air_date' | 'with_runtime'>
> & {
  [K in T extends 'movie' ? 'primary_release_date' : 'first_air_date']?: {
    gte: string | undefined
    lte: string | undefined
  }
} & {
  with_runtime?: { gte: number | string; lte: number | string }
}

export const validateRulesForm: Record<keyof FormSearch, RegisterOptions> = {
  search: {
    required: 'La búsqueda es requerida',
    minLength: {
      message: 'La búsqueda debe tener al menos 1 caracter',
      value: 1,
    },
    maxLength: {
      message: 'La búsqueda debe tener como máximo 255 caracteres',
      value: 255,
    },
    pattern: {
      message:
        'Formato inválido. Solo se permiten letras, números, espacios, guiones, apostrofes y puntos. No debe comenzar/terminar con espacios ni tener espacios múltiples',
      value: /^[a-zA-ZÀ-ÿ0-9][a-zA-ZÀ-ÿ0-9\s\-'.:&()]*[a-zA-ZÀ-ÿ0-9]$|^[a-zA-ZÀ-ÿ0-9]$/,
    },
  },
  type: {
    required: 'El tipo de búsqueda es requerido',
    validate: (value: FormSearch['type']) => {
      if (value !== 'movie' && value !== 'tv') {
        return 'El tipo de búsqueda debe ser película o serie'
      }
      return true
    },
  },
}

export const validateRulesFormFilters: Record<
  keyof Omit<FormFiltersOptions, 'primary_release_date' | 'first_air_date' | 'with_runtime'>,
  RegisterOptions
> = {
  with_genres: {
    validate: (value: FormFiltersOptions['with_genres']) => {
      const genres = value.toString().split(',')
      if (genres.length > 10) {
        return 'No puedes seleccionar más de 10 géneros'
      }
      return true
    },
  },
  with_original_language: {
    validate: (value: FormFiltersOptions['with_original_language']) => {
      if (!value || value === '') {
        return true
      }
      if (languages.some((language) => language.key === value)) {
        return true
      }
      return 'Idioma inválido'
    },
  },
  sort_by: {
    required: 'El criterio de ordenamiento es requerido',
    validate: (value: FormFiltersOptions['sort_by']) => {
      const validSortOptions = [
        'popularity.desc',
        'popularity.asc',
        'release_date.desc',
        'release_date.asc',
        'vote_average.desc',
        'vote_average.asc',
        'title.asc',
        'title.desc',
      ]
      if (!validSortOptions.includes(value)) {
        return 'Criterio de ordenamiento inválido'
      }
      return true
    },
  },
}

export const validateDateField = (
  fieldValue: DateValue,
  fieldType: 'gte' | 'lte',
  formValues: any,
  contentType?: FormSearch['type'],
) => {
  if (formValues && contentType) {
    const dateFieldName = contentType === 'movie' ? 'primary_release_date' : 'first_air_date'
    const dateField = formValues[dateFieldName]

    if (dateField) {
      if (fieldType === 'gte' && dateField.lte && fieldValue > dateField.lte) {
        return 'La fecha de inicio debe ser menor a la fecha de fin'
      }

      if (fieldType === 'lte' && dateField.gte && fieldValue < dateField.gte) {
        return 'La fecha de fin debe ser mayor a la fecha de inicio'
      }
    }
  }

  return true
}

export const validateRuntimeField = (
  fieldValue: number | undefined,
  fieldType: 'gte' | 'lte',
  formValues: FormFiltersOptions,
) => {
  if (!fieldValue) return true
  if (formValues) {
    const runtime = Number(fieldValue)

    if (runtime < 0) {
      return fieldType === 'gte'
        ? 'La duración mínima no puede ser negativa'
        : 'La duración máxima no puede ser negativa'
    }

    if (runtime > 100) {
      return fieldType === 'gte'
        ? 'La duración mínima no puede ser mayor a 100 horas'
        : 'La duración máxima no puede ser mayor a 100 horas'
    }

    if (fieldType === 'gte' && runtime > Number(formValues.with_runtime.lte)) {
      return 'La duración mínima debe ser menor a la duración máxima'
    }

    if (fieldType === 'lte' && runtime < Number(formValues.with_runtime.gte)) {
      return 'La duración máxima debe ser mayor a la duración mínima'
    }
  }

  return true
}
