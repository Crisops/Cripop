import { useBoxViewTrailer } from '../handleStates'

const ButtonCloseTrailer = () => {
  const { setBoxViewTrailer } = useBoxViewTrailer(state => state)

  const handleCloseTrailer = () => {
    setBoxViewTrailer(false)
  }

  return (

    <button onClick={handleCloseTrailer} className='border border-zinc-500 px-5 py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black'>Cerrar</button>

  )
}

export default ButtonCloseTrailer
