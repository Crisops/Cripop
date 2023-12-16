import type { DetailsSeriesSeason } from "@/types/dataSeriesSeasons"


type ErrorFetch = {
  statusCode: number,
  message: string
}


export const getEpisodesOfSeasons = async (token:string, id: string, numberSeason: string | undefined) => {

  const URL_SEASON_AND_EPISODES = `https://api.themoviedb.org/3/tv/${id}/season/${numberSeason}?append_to_response=episodes&language=es`

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch(URL_SEASON_AND_EPISODES, options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Error. Movie Not Found" } as ErrorFetch

    const season_details: DetailsSeriesSeason = await res.json()


    return season_details


  } catch (error) {
    console.log(error);
    
  }

}