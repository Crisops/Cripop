import type { RegisterOptions } from 'react-hook-form'

export type FormSearch = {
  search: string | null
  type: 'movie' | 'tv'
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
