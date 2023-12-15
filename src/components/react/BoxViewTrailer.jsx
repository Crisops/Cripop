import { useBoxViewTrailer } from '../handleStates.js'

const BoxViewTrailer = ({ children }) => {
  const { isBoxViewTrailer } = useBoxViewTrailer(state => state)

  return (
    <div className={` fixed ${isBoxViewTrailer ? 'block' : 'hidden'} h-screen z-50`}>
      {children}
    </div>
  )
}

export default BoxViewTrailer
