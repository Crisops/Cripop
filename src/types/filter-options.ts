export enum SortDate {
  POPULARITY_ASC = 'popularity.asc',
  POPULARITY_DESC = 'popularity.desc',
  VOTE_AVERAGE_DESC = 'vote_average.desc',
  VOTE_AVERAGE_ASC = 'vote_average.asc',
}

export interface FilterOption {
  key: string
  label: string
}

export type Languages = FilterOption & {
  src: string
}

export const languages: Languages[] = [
  {
    key: 'es',
    label: 'Español',
    src: 'https://flagcdn.com/es.svg',
  },
  {
    key: 'en',
    label: 'Inglés',
    src: 'https://flagcdn.com/us.svg',
  },
  {
    key: 'fr',
    label: 'Francés',
    src: 'https://flagcdn.com/fr.svg',
  },
  {
    key: 'it',
    label: 'Italiano',
    src: 'https://flagcdn.com/it.svg',
  },
  {
    key: 'pt',
    label: 'Portugués',
    src: 'https://flagcdn.com/pt.svg',
  },
  {
    key: 'ru',
    label: 'Ruso',
    src: 'https://flagcdn.com/ru.svg',
  },
  {
    key: 'zh',
    label: 'Chino',
    src: 'https://flagcdn.com/cn.svg',
  },
  {
    key: 'ja',
    label: 'Japonés',
    src: 'https://flagcdn.com/jp.svg',
  },
  {
    key: 'ko',
    label: 'Coreano',
    src: 'https://flagcdn.com/kr.svg',
  },
]

export const genres: FilterOption[] = [
  {
    key: '28',
    label: 'Acción',
  },
  {
    key: '12',
    label: 'Aventura',
  },
  {
    key: '16',
    label: 'Animación',
  },
  {
    key: '35',
    label: 'Comedia',
  },
  {
    key: '80',
    label: 'Crimenes',
  },
  {
    key: '99',
    label: 'Documental',
  },
  {
    key: '18',
    label: 'Drama',
  },
  {
    key: '10751',
    label: 'Familia',
  },
  {
    key: '14',
    label: 'Fantasía',
  },
  {
    key: '36',
    label: 'Historia',
  },
  {
    key: '27',
    label: 'Terror',
  },
  {
    key: '10402',
    label: 'Música',
  },
  {
    key: '9648',
    label: 'Misterio',
  },
  {
    key: '10749',
    label: 'Romance',
  },
  {
    key: '878',
    label: 'Ciencia Ficción',
  },
  {
    key: '10770',
    label: 'Película de TV',
  },
  {
    key: '53',
    label: 'Suspenso',
  },
  {
    key: '10752',
    label: 'Bélica',
  },
  {
    key: '37',
    label: 'Occidental',
  },
]

export const sortBy: FilterOption[] = [
  {
    key: SortDate.POPULARITY_DESC,
    label: 'Más Popular',
  },
  {
    key: SortDate.POPULARITY_ASC,
    label: 'Menos Popular',
  },
  {
    key: SortDate.VOTE_AVERAGE_DESC,
    label: 'Mejor Puntuada',
  },
  {
    key: SortDate.VOTE_AVERAGE_ASC,
    label: 'Peor Puntuada',
  },
]
