import { useBoxSearch } from '../handleStates'

const BoxMain = ({ children }) => {
  const { isBoxSearch } = useBoxSearch(state => state)

  return (
    <div className={`${isBoxSearch ? 'hidden' : 'block'}`}>
      {children}
    </div>
  )
}

export default BoxMain
