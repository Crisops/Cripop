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
    <div  onClick={handleViewSeasons} className='relative flex items-center justify-center gap-2 px-3 py-3 sm:py-2 xl:px-5 cursor-pointer text-zinc-950 bg-zinc-200'
    >
      {
        !isView 
        ? 
        <>
        <span className='text-zinc-950 font-Noto_Sans font-medium text-sm z-10'>Temporadas</span>
        <IconEye />
        </>
        :
        <span className='text-zinc-950 font-Noto_Sans font-medium text-sm z-10'>Cerrar</span>
      }
      
    </div>
  )
}

export default ButtonViewSeasons
