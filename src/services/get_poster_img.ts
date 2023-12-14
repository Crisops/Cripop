import type { ImagesMovies } from "@/types/imagesMovies"

type ErrorFetch = {
  statusCode: number,
  message: string
}

export const getPosterPath = async (token: string, id_movie: number, url: string | null) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
      
    const res = await fetch(`https://api.themoviedb.org/3/${url}/${id_movie}/images?include_image_language=en,es`, options)
  
    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Hubo un error en la solicitud" } as ErrorFetch
    
    const listPath = await res.json() as ImagesMovies
  
    return listPath.posters[0]

  } catch (error) {
    console.log(error);
    
  }

}
