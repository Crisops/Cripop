import { useBoxViewTrailerEpisodes } from '../handleStates.js'

const ButtonViewTrailerEpisode = () => {
  const { setBoxViewTrailerEpisodes } = useBoxViewTrailerEpisodes(state => state)

  const handleViewTrailerEopisode = () => {
    setBoxViewTrailerEpisodes(true)
  }

  return (
    <button onClick={handleViewTrailerEopisode} className='border border-zinc-500 px-5 py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black'>Ver Trailer</button>
  )
}

export default ButtonViewTrailerEpisode
