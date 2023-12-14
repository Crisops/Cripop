import { useBoxSearch } from '../handleStates.js'

const BoxSearch = ({ children }) => {
  const { isBoxSearch } = useBoxSearch(state => state)

  return (
    <div className={` fixed ${isBoxSearch ? 'block' : 'hidden'} h-screen`}>
      {children}
    </div>
  )
}

export default BoxSearch
