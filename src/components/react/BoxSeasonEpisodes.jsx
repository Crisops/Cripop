import { useViewSeasons } from '../handleStates'

const BoxSeasonEpisodes = ({ children, seasonNumber }) => {
  const { isViewEpisodes, viewSeason } = useViewSeasons(state => state)

  const seasonPreview = isViewEpisodes && viewSeason.season === seasonNumber

  return (
    <div className={`overflow-hidden transition-all duration-300 ease-in ${seasonPreview ? 'h-full' : 'h-0'}`}>
      {children}
    </div>
  )
}

export default BoxSeasonEpisodes
