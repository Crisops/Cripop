import { useEffect } from 'react'
import { useViewSeasons } from '../handleStates'
import { IconEye } from './Icons'

type Seasons = {
  numberSeasons: number | undefined,
  numberEpisodes: number | undefined
}

const ButtonViewSeasons = ({ numberSeasons, numberEpisodes }: Seasons) => {

  const {isView, setIsView} = useViewSeasons(state => state)

  useEffect(() => {
    setIsView(false)
  }, []);
  
  const handleViewSeasons = () =>{

    if (isView) {
      setIsView(false)
      return
    }

    setIsView(true)
  }

  return (
    <button onClick={handleViewSeasons} className='flex items-center justify-center gap-2 px-3 xl:px-5 py-3 sm:py-2 bg-zinc-950 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:bg-zinc-200
    hover:text-zinc-950 [&>span]:hover:text-zinc-950'
    >
      {
        !isView 
        ? 
        <>
        <span className='text-white font-Noto_Sans font-medium text-sm'>Temporadas</span>
        <IconEye />
        </>
        :
        <span className='text-white font-Noto_Sans font-medium text-sm'>Cerrar</span>
      }
      
    </button>
  )
}

export default ButtonViewSeasons
