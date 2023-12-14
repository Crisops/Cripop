import { IconSearch } from './Icons'
import { useBoxSearch } from '../handleStates.js'

const ButtonSearch = () => {
  const { setBoxSearch } = useBoxSearch(state => state)

  const handleClick = () => {
    setBoxSearch(true)
  }

  return (
    <div className='flex items-center justify-evenly'>
      <IconSearch handleClick={handleClick} />
      <button onClick={handleClick} id='text-github' className='py-3 px-2 text-white hidden md:block text-base 2xl:text-lg'>Buscar</button>
    </div>
  )
}

export default ButtonSearch
