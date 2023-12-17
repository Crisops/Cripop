import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../css/styleSwiper.css'
import { IconArrowLeft, IconArrowRight } from './Icons'
import type { DetailsSeriesSeason } from '@/types/dataSeriesSeasons'


type EpisodesOfSeason = {
  idSerie: string | undefined,
  URL_IMG: string,
  episodeNumber: (string | number) | undefined,
  episodes: DetailsSeriesSeason | undefined
}

const SwiperContainer = ({idSerie, URL_IMG, episodeNumber, episodes}: EpisodesOfSeason ) => {
  
  const episodesRest = episodes?.episodes.filter(episode => episode.episode_number != episodeNumber)

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: '#buttonPrev',
        nextEl: '#buttonNext'
      }}
      pagination={{ clickable: true }}
      speed={1000}
      slidesPerView='auto'
      centeredSlides
      effect='coverflow'
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
    >
      {
      episodes &&
      episodesRest?.map((episode, index) => {
        
        const urlName = episode.name?.replace(/\s/g, "-").replace(/[.()]/g,"")

        return (
          <SwiperSlide key={index} className='swiper-slide'>
          <a href={`/tv/series/${idSerie}/season/${episode.season_number}/episode/${episode.episode_number}/${urlName}`}>
            <img id='episodeImg' className='w-full h-full object-cover transition-colors duration-200' src={URL_IMG + episode.still_path} alt='asas' loading='lazy' />
            <div id="episode" className='absolute p-2 flex flex-col justify-center gap-3 inset-0 bg-gradient-to-t from-black translate-y-full transition-transform duration-200 ease-in'>
              <span className='text-base uppercase text-white font-Noto_Sans font-bold line-clamp-2'>{episode.name}</span>
              <span className='text-xs text-zinc-400 font-Noto_Sans line-clamp-2'>{episode.overview}</span>
            </div>
          </a>
        </SwiperSlide>
        )
      })
      }
      <div id='buttonPrev' className='absolute flex justify-center items-center top-1/2 left-2 w-12 p-1 sm:p-2 rounded-lg bg-none -translate-y-1/2 cursor-pointer z-10 hover:bg-white/10'>
        <IconArrowLeft />
      </div>
      <div id='buttonNext' className='absolute flex justify-center items-center top-1/2 right-2 w-12 p-1 sm:p-2 rounded-lg  -translate-y-1/2 cursor-pointer z-10 bg-none hover:bg-white/10'>
        <IconArrowRight />
      </div>
    </Swiper>

  )
}

export default SwiperContainer
