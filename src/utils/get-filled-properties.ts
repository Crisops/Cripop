import type { FormSearch } from '@/utils/validate-rules-form'

const isEqual = (a: any, b: any): boolean => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (typeof a !== typeof b) return false

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) return false
    return keysA.every((key) => isEqual(a[key], b[key]))
  }

  return false
}

export const getChangedFormFilters = (data: any, initial: any, contentType: FormSearch['type']): any => {
  const result: any = {}

  const dateFieldName = contentType === 'movie' ? 'primary_release_date' : 'first_air_date'

  const keys = [dateFieldName, 'with_runtime', 'with_genres', 'with_original_language', 'sort_by']

  for (const key of keys) {
    const value = data[key]
    const initialValue = initial[key]

    if (key === 'with_original_language' || key === 'with_genres') {
      if (value && value !== initialValue) {
        result[key] = value
      }
    } else if (!isEqual(value, initialValue)) {
      result[key] = value
    }
  }

  return result
}
