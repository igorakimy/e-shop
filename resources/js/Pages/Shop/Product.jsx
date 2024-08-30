import Breadcrumbs from '@/Components/Breadcrumbs'
import { Head, Link } from '@inertiajs/react'
import Badge from '@/Components/ui/Badge'
import { Swiper, SwiperSlide } from 'swiper/react'
import galleryImg from '../../../images/products/gallery-img.jpeg'
import bigGalleryImg from '../../../images/products/big-gallery-img.jpeg'
import brandImg from '../../../images/brands/brand.svg'
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

const Product = ({product, breadcrumbs}) => {

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
                <div className="labels">
                  <Badge text="Скидка 4000 ₽" className="bg-bright-red" />
                </div>
              </div>
              <div className="photos-container h-[485px] flex relative w-full">
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
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center !h-[83px] cursor-pointer
                     border-2 border-neutral-200 rounded-md w-full p-2.5 hover:border-neutral-400 select-none"
                  >
                    <img src={galleryImg} alt="Galery image"/>
                  </SwiperSlide>
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
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center select-none">
                    <img src={bigGalleryImg} alt="Galery photo" className="!max-w-full"/>
                  </SwiperSlide>
                </Swiper>
              </div>
              <p className="mt-[5px]">Код товара: {product.code}</p>
            </div>

            <div className="flex flex-col items-start px-0 md:px-5 py-5 w-full md:w-1/2">
              <div className="flex items-center  justify-between w-full">
                <h1 className="w-full text-xl font-semibold">{product.name}</h1>
                <div className="ml-[40px]">
                  <img src={brandImg} alt="Brand name"/>
                </div>
              </div>

              <div className="prop-words max-w-[535px] mt-2.5 text-sm">
                1920х1080, Core i3 N305 8x1.8 ГГц, 8 Гб, 256 Гб SSD, Intel UHD Graphics, Wi-Fi,BT,TypeC, без
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
                  <div className="product-buttons relative flex justify-between items-center mt-2.5">
                    <button
                      className="buy-btn add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 min-h-[50px] bg-[#f4f4f4] hover:bg-orange">
                      <div className="price-info text-left mr-5">
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

                <div className="markdown-box w-full min-h-[95px] mt-5 p-2.5 text-sm bg-[#eee] rounded">
                  Причина уценки: восстановлено сервисом
                </div>
              </div>

              <div className="service-line flex max-w-[300px] w-full whitespace-nowrap mt-5">
                <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded mr-2.5">
                  В наличии:
                  <span className="font-semibold cursor-pointer text-orange">в 6 магазинах</span>
                </div>
                <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded mr-2.5">
                  Доставка:
                  <span className="font-semibold">1-3 дня</span>
                </div>
                <div className="flex flex-col justify-center w-full p-2.5 text-sm bg-[#eee] rounded">
                  Гарантия:
                  <span className="font-semibold">12 мес.</span>
                </div>
              </div>
            </div>

            <div className="main-content-wrap w-full flex flex-col md:flex-row items-start mt-6">
              <div className="flex flex-col product-left-sticky-menu md:sticky left-0 top-[70px] min-w-[330px] w-full md:w-[330px]">
                <div className="product hidden md:block mb-[5px] p-2.5 border border-[#eee] rounded">
                  <div className="flex items-center">
                    <img src={galleryImg} alt="product img" className="max-w-[80px] max-h-[80px] select-none"/>
                    <span className="ml-2.5 text-sm">{product.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="line-buttons w-full">
                      <div className="product-buttons relative flex justify-between items-center mt-2.5">
                        <button
                          className="buy-btn add-to-cart flex justify-between items-center whitespace-nowrap py-[5px] px-2.5 min-h-[50px] bg-[#f4f4f4] hover:bg-orange">
                          <div className="price-info text-left mr-5">
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
                  <article className="html-style-box">
                    Этот ноутбук создан для тех, кто хочет получить качественное
                    и производительное компьютерное устройство с наиболее востребованным
                    функционалом. Данная модель полностью удовлетворяет данные
                    требования. Надежный накопитель предоставляет вам возможности
                    для долговременного хранения необходимой виртуальной информации.
                    Устройство оборудовано веб-камерой и микрофоном, благодаря которым
                    вы сможете организовывать видеоконференции с партнерами по бизнесу
                    и коллегами по работе.
                  </article>
                </div>
                <div className={`product-props ${activeMenuItem === 2 ? 'block' : 'hidden'}`}>
                  <h2 className="font-semibold text-lg mb-5">Характеристики {product.name}</h2>
                  <div>
                    <ul className="mb-2.5">
                      <li className="flex items-center prop-line text-sm leading-[.9rem]">
                        <span className="flex w-1/2 prop-name relative">Страна производства</span>
                        <span className="flex w-1/2 font-semibold pl-2.5">Китай</span>
                      </li>
                    </ul>

                    <div className="flex flex-col prop-group mb-5">
                      <span className="prop-group-name font-semibold text-base mb-2">
                        Экран
                      </span>
                      <ul>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Диагональ экрана</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">17.3"</span>
                        </li>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Технология изготовления экрана</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">SVA</span>
                        </li>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Разрешение экрана</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">1600x900</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col prop-group mb-5">
                      <span className="prop-group-name font-semibold text-base mb-2">
                        Процессор
                      </span>
                      <ul>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Линейка процессора</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">Intel Pentium Silver</span>
                        </li>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Модель процессора</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">N5030</span>
                        </li>
                        <li className="flex items-center prop-line mb-2.5 text-sm leading-[.9rem]">
                          <span className="flex w-1/2 prop-name relative">Количество ядер</span>
                          <span className="flex w-1/2 font-semibold pl-2.5">4</span>
                        </li>
                      </ul>
                    </div>
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
                        <img className="max-w-[100px] max-h-[60px]" src={galleryImg} alt="Product thumb"/>
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
