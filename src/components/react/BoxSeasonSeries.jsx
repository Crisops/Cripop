import { useViewSeasons } from '../handleStates'

const BoxSeasonSeries = ({ children }) => {
  // const [boxSeason, setBoxSeason] = useState(false)

  const { isView } = useViewSeasons(state => state)

  return (
    <div className={`relative ${isView ? 'w-[350px] sm:w-[600px]' : 'w-[0px]'} h-full max-h-[300px] xl:max-h-[500px] bg-white/10 overflow-y-scroll transition-all duration-300 ease-out xl:backdrop-blur-sm`}>
      {children}
    </div>
  )
}

export default BoxSeasonSeries
