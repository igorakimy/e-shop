import Breadcrumbs from '@/Components/Breadcrumbs'
import { Head, Link } from '@inertiajs/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { useState } from 'react'
import IconStar from '@/Components/Icons/IconStar'
import IconComment from '@/Components/Icons/IconComment'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import IconCompare from '@/Components/Icons/IconCompare'
import IconList from '@/Components/Icons/IconList'
import IconGears from '@/Components/Icons/IconGears'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useModal } from '@/Components/Context/ModalContext'
import Badges from '@/Components/Blocks/Badges'
import { route } from 'ziggy-js'
import ProductButtons from '@/Components/Blocks/ProductButtons'

const Product = ({product, productProperties, breadcrumbs}) => {

  const { openModal } = useModal()

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeMenuItem, setActiveMenuItem] = useState(1)

  const toggleMenuItem = (index) => {
    setActiveMenuItem(index)
  }

  const getActiveClass = (index, className) => {
    return activeMenuItem === index ? className : ''
  }

  return (
    <>
      <Head title={product.name} />

      <div className="my-5">
        <Breadcrumbs items={breadcrumbs} />

        <div className="product-wrap mt-5 rounded">
          <div className="product-page flex flex-wrap py-5 px-[5%] bg-white">
            <div className="photos w-full md:w-1/2">
              <div className="product-card mb-2.5">
                <Badges product={product} />
              </div>
              <div className="photos-container h-[485px] flex justify-center relative w-full">
                {product.photos.length > 1 ? (
                  <>
                    <Swiper
                      className="photos-control mr-2.5"
                      direction={'vertical'}
                      freeMode={true}
                      slidesPerView={5}
                      modules={[FreeMode, Thumbs]}
                      onSwiper={setThumbsSwiper}
                      watchSlidesProgress={true}
                      spaceBetween={10}
                    >
                      {product.gallery_thumbs.map((photo, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                        >
                          <img src={photo} alt={product.name}/>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      className="photos-slider pb-[25px]"
                      modules={[Pagination, Thumbs, Navigation]}
                      pagination={{
                        type: 'fraction',
                      }}
                      thumbs={{
                        swiper: thumbsSwiper
                      }}
                    >
                      {product.photos.map((photo, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center select-none">
                          <img src={photo} alt={product.name} className="!max-w-full"/>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <div className="flex justify-center items-center">
                    <img className="" src={product.photos[0]} alt={product.name}/>
                  </div>
                )}

              </div>
              <p className="mt-[5px]">Код товара: <span className="font-semibold">{product.code}</span></p>
            </div>

            <div className="flex flex-col items-start px-0 md:px-5 py-5 w-full md:w-1/2">
              <div className="flex items-center  justify-between w-full">
                <h1 className="w-full text-xl font-semibold">{product.name}</h1>
                <div className="ml-[40px]">
                  <Link href={route('brand', product.brand.slug)}>
                    {product.brand.logo ? (
                      <img src={product.brand.logo} alt={product.brand.name}/>
                    ) : (
                      <span className="text-orange">{product.brand.name}</span>
                    )}
                  </Link>
                </div>
              </div>

              <div className="prop-words max-w-[535px] mt-2.5 text-sm">
                {product.short_props}
              </div>

              <div className="product-rating flex items-center mt-2.5 mb-[5%] p-2 border border-[#eee] rounded">
                <div className="flex justify-between min-w-[117px]">
                  <IconStar />
                  <IconStar />
                  <IconStar />
                  <IconStar />
                  <IconStar />
                </div>
                <IconComment className="mx-2.5" />
                <span>0 отзывов</span>
              </div>

              <div className="flex flex-col max-w-[300px] w-full items-start">
                <div className="line-buttons w-full">

                  <ProductButtons product={product} />

                  <div className="price-cashback mt-2.5 ml-2.5 text-orange text-sm">
                    <span>Кэшбэк: </span>
                    <span>{product.cashback.toLocaleString()}</span>
                    <span> ₽</span>
                  </div>
                </div>

                {product.markdown_reason && (
                  <div className="markdown-box w-full min-h-[95px] mt-5 p-2.5 text-sm bg-[#eee] rounded">
                    Причина уценки: {product.markdown_reason}
                  </div>
                )}

              </div>

              <div className="service-line flex max-w-[300px] w-full whitespace-nowrap mt-5">

                <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded mr-2.5">
                  Наличие:
                  <span
                    className={`font-semibold ${product.in_stock !== 'Нет в наличии' && 'text-orange'}`}
                  >{product.in_stock}</span>
                </div>

                {product.delivery && (
                  <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded mr-2.5">
                    Доставка:
                    <span className="font-semibold">{product.delivery}</span>
                  </div>
                )}

                {product.warranty && (
                  <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded">
                    Гарантия:
                    <span className="font-semibold">{product.warranty}</span>
                  </div>
                )}

              </div>
            </div>

            <div className="main-content-wrap w-full flex flex-col md:flex-row items-start mt-6">
              <div
                className="flex flex-col product-left-sticky-menu md:sticky left-0 top-[70px] min-w-[330px] w-full md:w-[330px]">
                <div className="product hidden md:block mb-[5px] p-2.5 border border-[#eee] rounded">
                  <div className="flex items-center">
                    <img src={product.last_products_thumb} alt={product.name} className="max-w-[80px] max-h-[80px] select-none"/>
                    <span className="ml-2.5 text-sm">{product.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="line-buttons w-full">

                      <ProductButtons product={product} textClass={'text-lg'} />

                      <div className="price-cashback mt-2.5 ml-2.5 text-orange text-sm">
                        <span>Кэшбэк: </span>
                        <span>{product.cashback.toLocaleString()}</span>
                        <span> ₽</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="text-black">
                  <li
                    className={`menu-item mb-[5px] border-b-2 border-[orange] select-none ${getActiveClass(1, 'active')}`}
                    onClick={() => toggleMenuItem(1)}
                  >
                    <IconList />
                    <span className="ml-[15px]">Описание</span>
                  </li>
                  <li
                    className={`menu-item mb-[5px] border-b-2 border-[orange] select-none ${getActiveClass(2, 'active')}`}
                    onClick={() => toggleMenuItem(2)}
                  >
                    <IconGears />
                    <span className="ml-[15px]">Характеристики</span>
                  </li>
                  <li
                    className={`menu-item border-b-2 border-[orange] select-none ${getActiveClass(3, 'active')}`}
                    onClick={() => toggleMenuItem(3)}
                  >
                    <IconComment />
                    <span className="ml-[15px]">Отзывы</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mt-5 md:mt-0 md:ml-[40px] w-full p-5 border rounded border-[#eee]">
                <div className={`product-description ${activeMenuItem === 1 ? 'block' : 'hidden'}`}>
                  <h2 className="font-semibold text-lg mb-5">Описание {product.name}</h2>
                  <article
                    className="html-style-box"
                    dangerouslySetInnerHTML={{__html: product.description}}
                  ></article>
                </div>
                <div className={`product-props ${activeMenuItem === 2 ? 'block' : 'hidden'}`}>
                  <h2 className="font-semibold text-lg mb-5">Характеристики {product.name}</h2>
                  <div>
                    {productProperties.map((item, index) => {
                      if (item.group === 'Страна') {
                        return (
                          <ul key={index} className="mb-2.5">
                            {item.properties.map((prop, index) => (
                              <li key={index} className="flex items-center prop-line text-sm leading-[.9rem]">
                                <span className="flex w-1/2 prop-name relative">{prop.property.name}</span>
                                <span className="flex w-1/2 font-semibold pl-2.5">{prop.value}</span>
                              </li>
                            ))}
                          </ul>
                        )
                      }
                    })}

                    {productProperties.map((item, index) => {
                      if (item.group !== 'Страна' && item.group !== 'Вес') {
                        return (
                          <div key={index} className="flex flex-col prop-group mb-5">
                            {item.group && (
                              <span className="prop-group-name font-semibold text-base mb-2">
                                {item.group}
                              </span>
                            )}
                            <ul>
                              {item.properties.map((prop, index) => (
                                <li key={index} className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                                  <span className="flex w-1/2 prop-name relative">{prop.property.name}</span>
                                  <span className="flex w-1/2 font-semibold pl-2.5">{prop.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      }
                    })}

                    {productProperties.map((item, index) => {
                      if (item.group === 'Вес') {
                        return (
                          <ul key={index} className="mt-2.5">
                            {item.properties.map((prop, index) => (
                              <li key={index} className="flex items-center prop-line text-sm leading-[.9rem]">
                                <span className="flex w-1/2 prop-name relative">{prop.property.name}</span>
                                <span className="flex w-1/2 font-semibold pl-2.5">{prop.value}</span>
                              </li>
                            ))}
                          </ul>
                        )
                      }
                    })}
                  </div>
                </div>
                <div className={`product-reviews ${activeMenuItem === 3 ? 'block' : 'hidden'}`}>
                  <h2 className="font-semibold text-lg mb-5">
                    Отзывы на {product.name}
                  </h2>
                  <div>
                    <div className="flex flex-col min-w-full text-black">
                      <p className="mb-[15px]">
                        К этому товару нет отзывов, но Вы можете стать первым.
                        Чтобы оставить отзыв, необходимо авторизоваться
                      </p>
                      <div>
                        <DefaultButton
                          text="Авторизоваться"
                          handleClick={() => openModal('login')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-[40px] text-lg font-semibold">
              Просмотренный Вами товар
            </h2>
            <div className="last-products-box flex flex-wrap md:flex-row mt-5 w-full">
              <Swiper
                freeMode={true}
                slidesPerView={'auto'}
                className="last-products-slider flex w-full m-0"
              >
                {[1,2,3,4,5,6].map(item => (
                  <SwiperSlide key={item} className="product w-auto">
                    <div className="flex items-center">
                      <Link href={product.url_address}>
                        <img className="max-w-[100px] max-h-[60px]" src={product.last_products_thumb} alt="Product thumb"/>
                      </Link>
                      <Link href={product.url_address}>
                        {product.name}
                      </Link>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="line-buttons w-full">
                        <div className="product-buttons relative flex justify-between items-center mt-2.5">
                          <button
                            className="buy-btn add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 min-h-[50px] bg-[#f4f4f4] hover:bg-orange mb-2">
                            <div className="price-info text-left mr-2">
                              {product.discount ? (
                                <div className="price-old text-[#868686] text-xs line-through">
                                  {product.price}
                                  <span> ₽</span>
                                </div>
                              ) : ''}

                              <div className={`price ${!product.discount ? 'text-[22px]' : 'text-lg'} font-semibold`}>
                                {product.price - product.discount}
                                <span> ₽</span>
                              </div>
                            </div>
                            <IconCart fill="#868686" className="min-w-[30px]"/>
                          </button>
                          <button className="favorite-btn">
                            <IconFavorite stroke="#868686" fill="transparent" style={{maxWidth: "32px"}}/>
                          </button>
                          <button className="compare-btn">
                            <IconCompare color="transparent" className="w-[32px]" stroke="#868686"/>
                          </button>
                        </div>
                        <div className="price-cashback mt-2.5 ml-2.5 text-orange text-sm">
                          <span>Кэшбэк: </span>
                          <span>2 450</span>
                          <span> ₽</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
