import { IconSearch } from './Icons'
import { useBoxSearch } from '../handleStates.js'

const ButtonSearch = ({ icon, text, styles }) => {
  const { setBoxSearch } = useBoxSearch(state => state)

  const handleClick = () => {
    setBoxSearch(true)
  }

  return (
    <div className='flex items-center justify-evenly'>
      {icon && <IconSearch handleClick={handleClick} />}
      <button onClick={handleClick} className={`px-2 ${icon ? styles : styles}`}>{text}</button>
    </div>
  )
}

export default ButtonSearch
