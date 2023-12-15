import { useBoxViewTrailer } from '../handleStates.js'

const ButtonViewTrailer = () => {
  const { setBoxViewTrailer } = useBoxViewTrailer(state => state)

  const handleViewTrailer = () => {
    setBoxViewTrailer(true)
  }

  return (
    <button onClick={handleViewTrailer} className='border border-zinc-500 px-5 py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black'>Ver Trailer</button>
  )
}

export default ButtonViewTrailer
