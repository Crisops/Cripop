import type { EpisodeData } from "@/types/dataEpisodeSeason"


type ErrorFetch = {
  statusCode: number,
  message: string
}

type Episode = {
  token: string,
  idSerie: string
  seasonNumber: string | undefined
  episodeNumber: string | undefined
}


export const getDetailsEpisode = async ({token, idSerie, seasonNumber, episodeNumber}:Episode) => {

  const URL_EPISODE_DETAILS = `https://api.themoviedb.org/3/tv/${idSerie}/season/${seasonNumber}/episode/${episodeNumber}?language=es`

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch(URL_EPISODE_DETAILS, options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Error. Movie Not Found" } as ErrorFetch

    const episode_details: EpisodeData = await res.json()


    return episode_details


  } catch (error) {
    console.log(error);
    
  }

}