import { useBoxSearch } from '../handleStates.js'

const BoxSearch = ({ children }) => {
  const { isBoxSearch } = useBoxSearch(state => state)

  return (
    <div className={` ${isBoxSearch ? 'block' : 'hidden'}`}>
      {children}
    </div>
  )
}

export default BoxSearch
