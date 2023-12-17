import { useBoxViewTrailer, useBoxViewTrailerEpisodes } from '../handleStates.js'

const BoxViewTrailer = ({ children }) => {
  const { isBoxViewTrailer } = useBoxViewTrailer(state => state)
  const { isBoxViewTrailerEpisodes } = useBoxViewTrailerEpisodes(state => state)

  return (
    <div className={` fixed ${isBoxViewTrailer || isBoxViewTrailerEpisodes ? 'block' : 'hidden'} h-screen z-50`}>
      {children}
    </div>
  )
}

export default BoxViewTrailer
