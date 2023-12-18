import { useBoxViewTrailer } from '../handleStates.js'

const ButtonViewTrailer = () => {
  const { setBoxViewTrailer } = useBoxViewTrailer(state => state)

  const handleViewTrailer = () => {
    setBoxViewTrailer(true)
  }

  return (
    <button onClick={handleViewTrailer} className='flex-grow sm:flex-grow-0 border border-zinc-500 px-5 py-3 sm:py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black'>Ver Trailer</button>
  )
}

export default ButtonViewTrailer
