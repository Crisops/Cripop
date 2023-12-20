export interface Filters {
  iconFilter: React.ReactNode;
  typeFilter: string;
  options: SelectOptionFilters[];
  select: string
}

interface SelectOptionFilters {
  valueOption: string
  valueText: string
}


export const optionsPopularity: SelectOptionFilters[] = [
  {
    valueOption: "popularity.desc",
    valueText: "Popularidad Alta"
  },
  {
    valueOption: "popularity.asc",
    valueText: "Popularidad Baja"
  },
  {
    valueOption: "vote_average.desc",
    valueText: "Rate Alto"
  },
  {
    valueOption: "vote_average.asc",
    valueText: "Rate Bajo"
  }
]

export const optionsRate: SelectOptionFilters[] = [
  {
    valueOption: "1", 
    valueText: "1"
  },
  {
    valueOption: "2",
    valueText: "2"
  },
  {
    valueOption: "3",
    valueText: "3"
  },
  {
    valueOption: "4",
    valueText: "4"
  },
  {
    valueOption: "5",
    valueText: "5"
  },
  {
    valueOption: "6",
    valueText: "6"
  },
  {
    valueOption: "7",
    valueText: "7"
  },
  {
    valueOption: "8",
    valueText: "8"
  },
  {
    valueOption: "9",
    valueText: "9"
  },
  {
    valueOption: "10",
    valueText: "10"
  },
]


export const optionsGenders: SelectOptionFilters[] = [
  {
    valueOption: "action",
    valueText: "Acción"
  },
  {
    valueOption: "adventure",
    valueText: "Aventura"
  },
  {
    valueOption: "animation",
    valueText: "Animación"
  },
  {
    valueOption: "comedy",
    valueText: "Comedia"
  },
  {
    valueOption: "crime",
    valueText: "Crimenes"
  },
  {
    valueOption: "drama",
    valueText: "Drama"
  },
  {
    valueOption: "fantasy",
    valueText: "Fantasía"
  },
  {
    valueOption: "horror", 
    valueText: "Horror"
  },
  {
    valueOption: "romance",
    valueText: "Romance"
  },
  {
    valueOption: "science fiction",
    valueText: "Ciencia Ficción"
  },
  {
    valueOption: "war", 
    valueText: "Bélica"
  },
  {
    valueOption: "tv movie", 
    valueText: "Película de TV"
  },
  {
    valueOption: "thriller", 
    valueText: "Suspenso"
  },
  {
    valueOption: "documentary", 
    valueText: "Documental"
  },
  {
    valueOption: "history", 
    valueText: "Historia"
  },
  {
    valueOption: "music", 
    valueText: "Música"
  },
  {
    valueOption: "mystery", 
    valueText: "Misterio"
  },
]