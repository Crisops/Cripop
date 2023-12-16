import type { ImagesEpisodes } from "@/types/imagesEpisodes"

type ErrorFetch = {
  statusCode: number,
  message: string
}

export const getPosterEpisode = async (token: string, idSerie: string, numberSeason: string | undefined, numberEpisode: string | undefined) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
      
    const res = await fetch(`https://api.themoviedb.org/3/tv/${idSerie}/season/${numberSeason}/episode/${numberEpisode}/images`, options)
  
    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Hubo un error en la solicitud" } as ErrorFetch
    
    const listPath = await res.json() as ImagesEpisodes
  
    return listPath.stills[0]

  } catch (error) {
    console.log(error);
    
  }

}