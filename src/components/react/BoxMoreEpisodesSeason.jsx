import { useBoxViewEpisodes } from '../handleStates'

const BoxMoreEpisodesSeason = ({ children }) => {
  const { isBoxViewEpisodes } = useBoxViewEpisodes(state => state)

  return (
    <div className={`absolute flex justify-end xl:justify-center left-0 bottom-0 w-full transition-[height] duration-300 ease-in ${isBoxViewEpisodes ? 'h-40' : 'h-0 '} z-10`}>
      {children}
    </div>
  )
}

export default BoxMoreEpisodesSeason
