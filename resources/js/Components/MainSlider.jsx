import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from '@inertiajs/react'
import sliderImg1 from '../../images/slider/1.jpg'
import sliderImg2 from '../../images/slider/2.jpg'
import sliderImg3 from '../../images/slider/3.jpg'
import sliderImg4 from '../../images/slider/4.jpg'
import sliderImg5 from '../../images/slider/5.jpg'
import sliderImg6 from '../../images/slider/6.jpg'
import sliderImg7 from '../../images/slider/7.jpg'
import sliderImg8 from '../../images/slider/8.jpg'
import sliderImg9 from '../../images/slider/9.jpg'
import sliderImg10 from '../../images/slider/10.jpg'

const MainSlider = () => {

  const slides = [
    {
      image: sliderImg1,
      link: ''
    },
    {
      image: sliderImg2,
      link: ''
    },
    {
      image: sliderImg3,
      link: ''
    },
    {
      image: sliderImg4,
      link: ''
    },
    {
      image: sliderImg5,
      link: ''
    },
    {
      image: sliderImg6,
      link: ''
    },
    {
      image: sliderImg7,
      link: ''
    },
    {
      image: sliderImg8,
      link: ''
    },
    {
      image: sliderImg9,
      link: ''
    },
    {
      image: sliderImg10,
      link: ''
    },
  ]

  return (
    <Swiper
      className="main-slider"
      slidesPerView={1}
      loop={true}
      speed={1200}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="select-none ' + className + '">' + (index + 1) + '</span>';
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            {slide.link !== '' ? (
              <Link>
                <img src={slide.image} alt={index}/>
              </Link>
            ) : (
              <img src={slide.image} alt={index}/>
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MainSlider
