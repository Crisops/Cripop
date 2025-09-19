const ALLOWED_FILTER_KEYS = [
  'primary_release_date.gte',
  'primary_release_date.lte',
  'first_air_date.gte',
  'first_air_date.lte',
  'with_runtime.gte',
  'with_runtime.lte',
  'with_genres',
  'with_original_language',
  'sort_by',
  'page',
] as const

export const hasValidFilterParams = (searchParams: URLSearchParams): boolean => {
  const urlKeys = Array.from(searchParams.keys())

  if (urlKeys.length === 0) return false

  const hasValidParams = urlKeys.some((key) => ALLOWED_FILTER_KEYS.includes(key as any))

  return hasValidParams
}
