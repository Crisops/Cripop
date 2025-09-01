import type { DetailsSeason } from '@/types/data-season'
import { tmdbUrls } from '@/services/tmdb/urls'
import axios from '@/lib/axios/client'

interface GetSeasonDetailsProps {
  id_serie: number
  season_number: number
}

export const getSeasonDetails = async ({
  id_serie: idSerie,
  season_number: seasonNumber,
}: GetSeasonDetailsProps): Promise<DetailsSeason> => {
  const url = tmdbUrls.detailsSeason('tv', idSerie, seasonNumber)

  try {
    const response = await axios.get<DetailsSeason>(url)
    if (!response.success) throw response.error

    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
