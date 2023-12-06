
import type { DetailsMovieID } from "@/types/DetailsMovieId"


type ErrorFetch = {
  statusCode: number,
  message: string
}


export const getDetailsMovie = async (token:string, id: number) => {

  const URL_DETAILS_MOVIE = `https://api.themoviedb.org/3/movie/${id}?language=es`

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch(URL_DETAILS_MOVIE, options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Error. Movie Not Found" } as ErrorFetch

    const movie_details: DetailsMovieID = await res.json()


    return movie_details


  } catch (error) {
    console.log(error);
    
  }

}