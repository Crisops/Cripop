import type { FormFiltersOptionsPartial } from '@/utils/validate-rules-form'

interface Props {
  formData: FormFiltersOptionsPartial
}

export const objectToURLSearchParams = ({ formData }: Props) => {
  const urlSearchParams = new URLSearchParams()

  for (const key in formData) {
    const value = formData[key as keyof FormFiltersOptionsPartial]

    if (typeof value === 'object') {
      for (const subKey in value) {
        urlSearchParams.append(`${key}.${subKey}`, value[subKey as keyof typeof value])
      }
    } else {
      urlSearchParams.append(key, value ?? '')
    }
  }

  return urlSearchParams.toString()
}
