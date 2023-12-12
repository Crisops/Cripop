import { useViewSeasons } from '../handleStates'
import { IconArrowDown, IconArrowRight } from './Icons'

const BoxSeason = ({ seasonNumber, idMovie, token, title, overview }) => {
  const { isViewEpisodes, viewSeason, setIsViewEpisodes, setViewSeason } = useViewSeasons(state => state)

  const isSeasonPreview = isViewEpisodes && viewSeason.season === seasonNumber

  const handleViewEpisodes = async () => {
    if (isSeasonPreview) {
      setIsViewEpisodes(false)
      return
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await fetch(`https://api.themoviedb.org/3/tv/${idMovie}/season/${seasonNumber}?language=es`, options)

    const data = await response.json()

    const season = await data.season_number

    setIsViewEpisodes(true)
    setViewSeason({ season })
  }

  return (
    <div onClick={handleViewEpisodes} className='w-full h-24 flex justify-between items-center px-10 py-5 overflow-hidden transition-colors duration-300 cursor-pointer xl:hover:bg-zinc-950'>
      <div className='relative flex flex-col justify-center gap-1'>
        <h3 className='text-2xl font-semibold text-white font-Libre_Franklin'>{title}</h3>
        <p className='text-xs max-w-xs line-clamp-2 text-white/40'>{overview}</p>
      </div>
      {isSeasonPreview ? <IconArrowDown /> : <IconArrowRight />}
    </div>
  )
}

export default BoxSeason
