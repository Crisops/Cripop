import { useViewSeasons } from '../handleStates'
import '../css/styleBoxSeasonSeries.css'

const BoxSeasonSeries = ({ children }) => {
  const { isView } = useViewSeasons(state => state)

  return (
    <div id='scroll' className={`relative ${isView ? 'w-[350px] sm:max-md:w-[610px] md:max-xl:w-[740px] xl:w-[500px]' : 'w-[0px]'} h-full max-h-[300px] xl:max-h-[500px] bg-white/10 overflow-y-scroll transition-all duration-300 ease-out xl:backdrop-blur-sm`}>
      {children}
    </div>
  )
}

export default BoxSeasonSeries
