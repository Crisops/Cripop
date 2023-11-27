import { type Genders, type Genre } from "@/types/Genders"

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