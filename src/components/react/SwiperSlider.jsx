import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../css/styleSwiper.css'
import { IconArrowLeft, IconArrowRight } from './Icons'

const image1 = 'https://swiperjs.com/demos/images/nature-1.jpg'
const image2 = 'https://swiperjs.com/demos/images/nature-2.jpg'
const image3 = 'https://swiperjs.com/demos/images/nature-3.jpg'
const image4 = 'https://swiperjs.com/demos/images/nature-4.jpg'
const image5 = 'https://swiperjs.com/demos/images/nature-5.jpg'
const image6 = 'https://swiperjs.com/demos/images/nature-6.jpg'
const image7 = 'https://swiperjs.com/demos/images/nature-7.jpg'

const images = [
  image1, image2, image3, image4, image5, image6, image7
]

const SwiperSlider = () => {
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
      images.map((slide, index) => (
        <SwiperSlide key={index} className='swiper-slide group'>
          <a href='#'>
            <img className='w-full h-full object-cover' src={slide} alt='asas' />
            <div className='absolute inset-0 bg-gradient-to-t from-black translate-y-full transition-transform duration-200 ease-in group-hover:translate-y-0' />
          </a>
        </SwiperSlide>
      ))
      }
      <div id='buttonPrev' className='absolute flex justify-center items-center top-1/2 left-2 w-12 p-1 sm:p-2 rounded-lg bg-[#ffc800]/30 -translate-y-1/2 cursor-pointer z-10'>
        <IconArrowLeft />
      </div>
      <div id='buttonNext' className='absolute flex justify-center items-center top-1/2 right-2 w-12 p-1 sm:p-2 rounded-lg bg-[#ffc800]/30 -translate-y-1/2 cursor-pointer z-10'>
        <IconArrowRight />
      </div>
    </Swiper>

  )
}

export default SwiperSlider
