import { useBoxSearch } from '../handleStates.js'
import { useEffect } from 'react'

const BoxSearch = ({ children }) => {
  const { isBoxSearch, setBoxSearch } = useBoxSearch(state => state)

  useEffect(() => {
    setBoxSearch(false)
  }, [])

  return (
    <div className={` fixed ${isBoxSearch ? 'block' : 'hidden'} h-screen`}>
      {children}
    </div>
  )
}

export default BoxSearch
