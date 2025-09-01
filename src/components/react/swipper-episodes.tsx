import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useShallow } from 'zustand/react/shallow'
import { useStore } from '@/hooks/use-store'
import type { Episode } from '@/types/episode'
import Button from '@/components/shared/button'
import EpisodeCard from '@/components/react/episode-card'

type EpisodesOfSeason = {
  episodeNumber: number
  episodes: Episode[]
  seasonNumber: number
}

const SwiperEpisodes = ({ episodeNumber, episodes, seasonNumber }: EpisodesOfSeason) => {
  const { isViewEpisodes } = useStore(
    useShallow((state) => {
      return {
        isViewEpisodes: state.isViewEpisodes,
      }
    }),
  )

  const episodeIndex = episodes.findIndex((episode) => episode.episode_number === episodeNumber)
  const initialSlide = episodeIndex !== -1 ? episodeIndex : 0

  const buttonPrev = useRef<HTMLButtonElement>(null)
  const buttonNext = useRef<HTMLButtonElement>(null)
  return (
    <div
      className={`transition-translate duration-300 ${isViewEpisodes ? 'translate-y-0' : 'translate-y-[200%]'} relative z-20 flex h-44 w-screen flex-col items-center justify-start gap-1 md:items-end xl:absolute xl:bottom-0 xl:items-center xl:justify-center`}
    >
      <div className="w-full max-sm:max-w-screen sm:max-w-[500px] 2xl:max-w-[600px]">
        <div className="flex justify-center pr-5">
          <p className="text-tiny text-foreground-600 font-light">
            Otros episodios de la{' '}
            <span className="font-semibold text-sky-900/60 uppercase">temporada {seasonNumber}</span>
          </p>
        </div>
        <Swiper
          initialSlide={initialSlide}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            prevEl: buttonPrev.current,
            nextEl: buttonNext.current,
          }}
          speed={1000}
          slidesPerView="auto"
          centeredSlides
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {episodes.map((episode) => {
            if (new Date(episode.air_date) > new Date()) return null
            return (
              <SwiperSlide key={episode.id} className="group h-36 max-w-80">
                <EpisodeCard
                  idSerie={episode.show_id}
                  season={episode.season_number}
                  episode={episode.episode_number}
                  imgUrl={episode.still_path}
                  name={episode.name}
                  overview={episode.overview}
                />
              </SwiperSlide>
            )
          })}
          <Button
            ref={buttonPrev}
            variant="light"
            radius="sm"
            isIconOnly
            className="data-[hover=true]:bg-default/20 absolute top-1/2 left-2 z-10 -translate-y-1/2"
          >
            <ArrowLeft color="white" />
          </Button>
          <Button
            ref={buttonNext}
            variant="light"
            radius="sm"
            isIconOnly
            className="data-[hover=true]:bg-default/20 absolute top-1/2 right-2 z-10 -translate-y-1/2"
          >
            <ArrowRight color="white" />
          </Button>
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperEpisodes
