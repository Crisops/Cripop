import { type Genders } from "@/types/Genders"

export const getGendersMovies = async (moviesGendersList: number[][], gendersList: Genders) => {


  const gendersMovie = moviesGendersList.map((listIdGenders) => { 
    const movieWithGenres = listIdGenders.map(genreId => {
      const genre = gendersList?.genres.find(genre => genre.id === genreId)
      return genre
    })
    return movieWithGenres
  })
  

  return gendersMovie
}

export const getGendersSeries = async (seriesGendersList: number[][], gendersList: Genders) => {


  const gendersSeries = seriesGendersList.map((listIdGenders) => { 
    const serieWithGenres = listIdGenders.map(genreId => {
      const genre = gendersList?.genres.find(genre => genre.id === genreId)
      return genre
    })
    return serieWithGenres
  })
  

  return gendersSeries
}