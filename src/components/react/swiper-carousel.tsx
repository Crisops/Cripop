import 'swiper/css'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'

const SwiperCarousel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={'auto'}
      freeMode
      mousewheel={false}
      modules={[FreeMode, Mousewheel]}
      className="h-full w-full !px-4"
    >
      <SwiperSlide className="!h-auto !w-auto">
        <div className="flex">{children}</div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperCarousel
