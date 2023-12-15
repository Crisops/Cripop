import { useViewSeasons } from '../handleStates'
import '../css/styleBoxSeasonSeries.css'

const BoxSeasonSeries = ({ children }) => {
  const { isView } = useViewSeasons(state => state)

  return (
    <div id='scroll' className={`relative flex flex-col ${isView ? 'w-[350px] sm:w-[610px] md:w-[740px] xl:w-[500px]' : 'w-0'} h-[300px] xl:h-[500px] bg-white/10 overflow-y-scroll transition-all duration-500 ease xl:backdrop-blur-sm`}>
      {children}
    </div>
  )
}

export default BoxSeasonSeries
