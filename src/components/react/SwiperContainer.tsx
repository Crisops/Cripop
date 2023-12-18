import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../css/styleSwiper.css'
import { IconArrowLeft, IconArrowRight } from './Icons'
import type { DetailsSeriesSeason } from '@/types/dataSeriesSeasons'
import OtherEpisodesSeason from './OtherEpisodesSeason'


type EpisodesOfSeason = {
  idSerie: string | undefined,
  URL_IMG: string,
  episodeNumber: (string | number) | undefined,
  episodes: DetailsSeriesSeason | undefined,
  seasonNumber: string | undefined
}

const SwiperContainer = ({idSerie, URL_IMG, episodeNumber, episodes, seasonNumber}: EpisodesOfSeason ) => {
  
  const episodesRest = episodes?.episodes.filter(episode => episode.episode_number != episodeNumber)

  return (
    <div className='flex flex-col h-44 gap-1'>
      <div className='flex justify-end pr-5 xl:pr-0 xl:justify-center'>
        <p className='text-white/25 font-Noto_Sans font-extralight text-xs'>Otros episodios de la <span className='text-sky-950 font-semibold font-Noto_Sans uppercase'>temporada {seasonNumber}</span></p>
      </div>
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
            <OtherEpisodesSeason
            idSerie={idSerie}
            season={episode.season_number}
            episode={episode.episode_number}
            img_url={URL_IMG + episode.still_path}
            name={episode.name}
            overview={episode.overview}
            urlName={urlName}
            />    
          </SwiperSlide>
          )
        })
        }
        <div id='buttonPrev' className='absolute flex justify-center items-center top-1/2 left-2 w-12 p-1 sm:p-2 rounded-lg bg-none -translate-y-1/2 cursor-pointer z-10 xl:hover:bg-white/10'>
          <IconArrowLeft />
        </div>
        <div id='buttonNext' className='absolute flex justify-center items-center top-1/2 right-2 w-12 p-1 sm:p-2 rounded-lg  -translate-y-1/2 cursor-pointer z-10 bg-none xl:hover:bg-white/10'>
          <IconArrowRight />
        </div>
      </Swiper>
    </div>

  )
}

export default SwiperContainer
