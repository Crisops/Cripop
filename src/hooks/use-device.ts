import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash-es/debounce'

export const useDevice = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  })

  const updateViewport = useCallback(() => {
    setViewport({
      width: window.innerWidth,
    })
  }, [])

  const debouncedHandleResize = useCallback(debounce(updateViewport, 150), [updateViewport])

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
      debouncedHandleResize.cancel()
    }
  }, [debouncedHandleResize])

  return {
    isMobile: viewport.width < 768,
  }
}
