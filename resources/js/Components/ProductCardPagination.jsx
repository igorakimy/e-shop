import {useSwiper} from "swiper/react";

const ProductCardPagination = () => {

  const swiper = useSwiper()

  return (
    <div
      className='custom-pagination absolute !hidden lg:!flex'
      onMouseOver={(e) => {
        let isPaginationBullet = e.target.classList.contains('custom-pagination-bullet')
        let activeElems = document.querySelectorAll('.custom-pagination-bullet-active')
        activeElems.forEach((el) => {
          el.classList.remove('custom-pagination-bullet-active')
        })
        if (isPaginationBullet) {
          let index = parseInt(e.target.getAttribute('data-index'), 10)
          e.target.classList.add('custom-pagination-bullet-active')
          swiper.slideTo(index)
        }
      }}
    >
      <div className="custom-pagination-bullet custom-pagination-bullet-active" data-index="0"></div>
      <div className="custom-pagination-bullet" data-index="1"></div>
      <div className="custom-pagination-bullet" data-index="2"></div>
    </div>
  )
}

export default ProductCardPagination
