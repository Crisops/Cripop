import { IconSearch } from './Icons'
import { useBoxSearch } from '../handleStates.js'

const ButtonSearch = ({ icon, text }) => {
  const { setBoxSearch } = useBoxSearch(state => state)

  const handleClick = () => {
    setBoxSearch(true)
  }

  return (
    <div className='flex items-center justify-evenly'>
      {icon && <IconSearch handleClick={handleClick} />}
      <button onClick={handleClick} id='text-github' className={`px-2 ${icon ? 'text-white bg-none flex-grow-0 py-3 hidden md:block text-base 2xl:text-lg' : 'text-zinc-950 bg-white transition-colors hover:bg-white/50 flex-grow 1 py-2 text-sm'}`}>{text}</button>
    </div>
  )
}

export default ButtonSearch
