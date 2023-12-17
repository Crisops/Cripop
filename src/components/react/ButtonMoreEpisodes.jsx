import { useBoxViewEpisodes } from '../handleStates'
import { useEffect } from 'react'

const ButtonMoreEpisodes = () => {
  const { isBoxViewEpisodes, setBoxViewEpisodes } = useBoxViewEpisodes(state => state)

  useEffect(() => {
    setBoxViewEpisodes(false)
  }, [])

  const handleViewMoreEpisodes = () => {
    if (isBoxViewEpisodes) {
      setBoxViewEpisodes(false)
      return
    }

    setBoxViewEpisodes(true)
  }

  return (
    <button onClick={handleViewMoreEpisodes} className='border border-zinc-500 px-5 py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black'>{isBoxViewEpisodes ? 'Ocultar' : 'Ver más episodios'}</button>
  )
}

export default ButtonMoreEpisodes
