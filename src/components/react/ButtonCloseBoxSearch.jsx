import { IconClose } from './Icons'
import { useBoxSearch } from '../handleStates.js'

const ButtonCloseBoxSearch = () => {
  const { setBoxSearch } = useBoxSearch(state => state)
  const handleClick = () => {
    setBoxSearch(false)
  }

  return (
    <button onClick={handleClick}>
      <IconClose />
    </button>

  )
}

export default ButtonCloseBoxSearch
