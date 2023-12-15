import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { useBoxViewTrailer } from '../handleStates'

const VideoTrailer = ({ id, token, view }) => {
  const [video, setVideo] = useState({})
  const { isBoxViewTrailer } = useBoxViewTrailer(state => state)

  const optsYoutube = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      fs: 0,
      cc_load_policy: 0,
      modestbranding: 1
    }
  }

  useEffect(() => {
    const getVideoMovie = async () => {
      try {
        const urlEn = `https://api.themoviedb.org/3/${view}/${id}/videos?language=en`
        const urlEs = `https://api.themoviedb.org/3/${view}/${id}/videos?language=es`
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }

        const videosEs = await getVideoEs(urlEs, options)

        let videoTrailers

        if (videosEs.results.length !== 0) {
          videoTrailers = videosEs.results.find(trailer => /tr[áa]iler/i.test(trailer.name))
          setVideo(videoTrailers)
        } else {
          videoTrailers = await getVideoEn(urlEn, options)
          const trailers = videoTrailers.results.find(trailer => /Official.*Trailer/i.test(trailer.name))
          setVideo(trailers)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getVideoMovie()
  }, [])

  const getVideoEs = async (urlEs, options) => {
    const response = await fetch(urlEs, options)

    if (!response.ok) return new Error('Error en la solicitud de datos')

    const videosEs = await response.json()

    return videosEs
  }

  const getVideoEn = async (urlEn, options) => {
    const response = await fetch(urlEn, options)

    if (!response.ok) return new Error('Error en la solicitud de datos')

    const videosEn = await response.json()

    return videosEn
  }

  return (
    <div className={`relative ${isBoxViewTrailer ? 'block' : 'hidden'} w-[350px] min-[500px]:w-[450px] h-[300px] sm:max-md:w-[630px] sm:max-md:h-[450px] md:w-[740px] md:h-[500px] xl:w-[1280px] xl:h-[720px]`}>
      {
      (video.key && isBoxViewTrailer) &&
        (
          <YouTube
            className='absolute w-full h-full'
            iframeClassName='absolute w-full h-full'
            opts={optsYoutube}
            videoId={video.key}
          />
        )
    }
    </div>
  )
}

export default VideoTrailer
