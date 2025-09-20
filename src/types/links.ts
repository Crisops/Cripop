type Link = {
  id: string
  label: string
  href: string
}

type MenuLinks = {
  id: string
  label: string
  subcategories: Link[]
}

export const menuLinks: MenuLinks[] = [
  {
    id: 'movie',
    label: 'Películas',
    subcategories: [
      {
        id: 'movie-cartelera',
        label: 'Cartelera',
        href: '/movie/nowplaying',
      },
      {
        id: 'movie-populares',
        label: 'Populares',
        href: '/movie/popular',
      },
      {
        id: 'movie-mejores-calificadas',
        label: 'Mejores calificadas',
        href: '/movie/top',
      },
    ],
  },
  {
    id: 'tv',
    label: 'Series',
    subcategories: [
      {
        id: 'tv-populares',
        label: 'Populares',
        href: '/tv/popular',
      },
      {
        id: 'tv-mejores-calificadas',
        label: 'Mejores calificadas',
        href: '/tv/top',
      },
    ],
  },
]
