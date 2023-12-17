import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { useBoxViewTrailerEpisodes } from '../handleStates'

const VideoTrailerEpisodes = ({ id, token, numberSeason, numberEpisode }) => {
  const [video, setVideo] = useState({})
  const { isBoxViewTrailerEpisodes } = useBoxViewTrailerEpisodes(state => state)

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
        const urlEn = `https://api.themoviedb.org/3/tv/${id}/season/${numberSeason}/episode/${numberEpisode}/videos?include_video_language=es,en`
        const urlEs = `https://api.themoviedb.org/3/tv/${id}/season/${numberSeason}/episode/${numberEpisode}/videos?include_video_language=es,en`
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
          videoTrailers = videosEs.results[0]
          setVideo(videoTrailers)
        } else {
          videoTrailers = await getVideoEn(urlEn, options)
          const trailers = videoTrailers.results[0]
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
    <div className={`relative ${isBoxViewTrailerEpisodes ? 'block' : 'hidden'} w-[350px] min-[500px]:w-[450px] h-[300px] sm:max-md:w-[630px] sm:max-md:h-[450px] md:w-[740px] md:h-[500px] xl:w-[1280px] xl:h-[720px]`}>
      {
      (video.key && isBoxViewTrailerEpisodes) &&
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

export default VideoTrailerEpisodes
