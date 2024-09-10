import { Link } from '@inertiajs/react'
import {Swiper, SwiperSlide} from "swiper/react";
import Badges from '@/Components/Blocks/Badges'
import { Navigation } from 'swiper/modules'
import ProductButtons from '@/Components/Blocks/ProductButtons'

const ProductCard = ({product, className}) => {
  return (
    <div className={`product-card grid-style p-2.5 flex flex-col relative bg-white w-full ${className}`}>

      <Badges product={product} />

      <div className="photo-box flex flex-col items-center justify-center h-[200px] overflow-hidden w-full">
        {product.card_thumbs.length > 1 ? (
          <Link
            className="z-[2] flex justify-center justify-items-center mb-3 h-[185px] min-w-full max-w-[316px]"
            href={product.url_address}
          >
            <Swiper
              className={`slider-${product.id} product-card-slider flex h-full`}
              centeredSlides={true}
              modules={[Navigation]}
              navigation={true}
              onSlideChange={(swiper) => {
                const bullets = document.querySelectorAll('.custom-pagination-bullet')
                bullets.forEach((el) => {
                  el.classList.remove('custom-pagination-bullet-active')
                  let index = parseInt(el.getAttribute('data-index'), 10)
                  if (index === swiper.activeIndex) {
                    el.classList.add('custom-pagination-bullet-active')
                  }
                })
              }}
            >
              {product.card_thumbs.map((photo, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <img src={photo} alt={`${product.name}-${index}`}/>
                </SwiperSlide>
              ))}

              {/*<ProductCardPagination />*/}
            </Swiper>
          </Link>
        ) : (
          <Link className="photo-wrap z-[2] flex justify-center mb-3" href={product.url_address}>
            <img src={product.card_thumbs[0] || ''} alt={product.name}/>
          </Link>
        )}
      </div>

      <Link className="product-name hover:text-orange" href={product.url_address}>
        {product.name}
      </Link>

      <div className="line-buttons">
        <ProductButtons product={product} textClass={'text-lg'} />
        <div className="price-cashback mt-2.5 ml-2.5 text-orange text-sm">
          <span>Кэшбэк: </span>
          <span>{product.cashback}</span>
          <span> ₽</span>
        </div>
      </div>

      <div className="product-status mt-2.5 text-sm">
        <div className="stores">
          <span>Наличие: </span>
          <span className="font-semibold text-orange">{product.in_stock}</span>
        </div>
        <div>
          <span>Доставка: </span>
          <span className="font-semibold text-orange">{product.delivery || 'Нет'}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
