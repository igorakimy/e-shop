import { Link } from '@inertiajs/react'
import productImg from '../../images/products/preview_image.jpg'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import IconCompare from '@/Components/Icons/IconCompare'
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCardPagination from "./ProductCardPagination.jsx";
import Badges from '@/Components/Blocks/Badges'

const ProductCard = ({product, className, photos}) => {
  return (
    <div className={`product-card grid-style p-2.5 flex flex-col relative bg-white w-full ${className}`}>

      <Badges product={product} />

      <div className="photo-box flex flex-col items-center justify-center h-[200px] overflow-hidden w-full">
        {photos ? (
          <Link
            className="photo-wrap z-[2] flex justify-center justify-items-center mb-3 w-full" href="/"
          >
            <Swiper
              className="product-card-slider"
              centeredSlides={true}
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
              <SwiperSlide className="flex justify-center">
                <img src={productImg} alt="Product image"/>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <img src={productImg} alt="Product image"/>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <img src={productImg} alt="Product image"/>
              </SwiperSlide>

              <ProductCardPagination />
            </Swiper>
          </Link>
        ) : (
          <Link className="photo-wrap z-[2] flex justify-center mb-3" href={product.url_address}>
            <img src={productImg} alt="Product image"/>
          </Link>
        )}
      </div>

      <Link className="product-name hover:text-orange" href={product.url_address}>
        {product.name}
      </Link>

      <div className="line-buttons">
        <div className="product-buttons relative flex justify-between items-center mt-2.5">
          {product.in_stock === 'В наличии' ? (
            <button
              className="buy-btn add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 bg-[#f4f4f4] hover:bg-orange">
              <div className="price-info text-left mr-1.5">
                {product.discount > 0 && (
                  <div className="price-old text-[#868686] text-xs line-through">
                    {product.price}
                    <span> ₽</span>
                  </div>
                )}
                <div className="price text-lg font-semibold">
                  {product.price - product.discount}
                  <span> ₽</span>
                </div>
              </div>
              <IconCart fill="#868686" className="min-w-[30px]"/>
            </button>
          ): (
            <button
              className="buy-btn-disabled add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 bg-[#f4f4f4] !cursor-auto">
              <div className="price-info text-left mr-1.5">
                <div className="price text-lg font-semibold">
                  {product.price - product.discount}
                  <span> ₽</span>
                </div>
              </div>
            </button>
          )}

          <button className="favorite-btn">
            <IconFavorite stroke="#868686" fill="transparent" style={{maxWidth: "32px"}}/>
          </button>

          <button className="compare-btn">
            <IconCompare color="transparent" className="w-[32px]" stroke="#868686"/>
          </button>
        </div>
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
