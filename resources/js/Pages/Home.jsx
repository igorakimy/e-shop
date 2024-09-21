import { Link, usePage } from '@inertiajs/react'
import { categoryIcons } from '@/Constants'
import IconFire from '@/Components/Icons/IconFire'
import subCatImage from '../../images/subcategory-image.jpeg'
import allBrandsImg from '../../images/brands/all_brands.svg'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import MainSlider from '@/Components/MainSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from '@/Components/ProductCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { route } from 'ziggy-js'

const Home = ({categories, products, brands}) => {

  const { appUrl } = usePage().props

  const [openSubCategoryMenu, setOpenSubCategoryMenu] = useState({
    state: true,
    item: null
  })

  return (
    <>
      <div className="flex flex-row mb-5">
        <div className="hidden md:flex categories-box">
          <ul className="flex flex-col py-2.5">
            {categories && categories.map((category, parentIndex) => {
              let Icon = categoryIcons[category.icon]
              let categoryUrl = `${appUrl}/shop/${category.url.address}`
              return (
                <li
                  key={parentIndex}
                  className="flex justify-items-center items-center text-sm px-2.5 cursor-pointer hover:underline"
                  onMouseOver={() => setOpenSubCategoryMenu({state: true, item: parentIndex})}
                  onMouseLeave={() => setOpenSubCategoryMenu({state: false, item: parentIndex})}
                >
                  <div className="category-icon flex justify-items-center justify-center items-center mr-2.5">
                    {<Icon className="h-full block align-middle"/>}
                  </div>
                  <Link href={categoryUrl}>{category.name}</Link>
                  <div
                    className={`second-level-menu ` + (openSubCategoryMenu.state && openSubCategoryMenu.item === parentIndex ? 'opacity-1 visible' : 'invisible opacity-0')}>
                    <ul>
                      {category.children.map((child, index) => {
                        let childCategoryUrl = `${appUrl}/shop/${child.url.address}`
                        return (
                          <li key={index}>
                            <Link href={childCategoryUrl}>
                              <h4>{child.name}</h4>
                            </Link>
                            <img src={child.photo_url} alt={child.name}/>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}

            <li
              className="flex justify-items-center items-center text-sm px-2.5 cursor-pointer hover:underline border-t-2 border-[#ededed]">
              <div className="category-icon flex justify-items-center justify-center items-center mr-2.5">
                <IconFire className="h-full block align-middle"/>
              </div>
              <Link href={route('shop.markdown')}>Уценка</Link>
            </li>
          </ul>
        </div>

        <div className="slider-wrap flex flex-col w-full">
          <div className="flex leading-[0]">
            <MainSlider/>
          </div>
          {brands && (
            <div className="brands mt-5 hidden md:flex flex-row">
              <div className="bs-item">
                <Link href={route('brands')}>
                  <img src={allBrandsImg} alt="All brands"/>
                </Link>
              </div>
              {brands.map((brand, index) => (
                <div key={index} className="bs-item">
                  <Link href={route('brand', brand.slug)}>
                    <img src={brand.logo} alt={brand.name}/>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mb-5 w-full md:hidden">
        <Swiper
          className="mobile-categories"
          speed={1200}
          freeMode={true}
          slidesPerView={'auto'}
        >
          {categories.map((category, index) => {
            let Icon = categoryIcons[category.icon]
            let categoryUrl = `${appUrl}/shop/${category.url.address}`
            return (
              <SwiperSlide key={index} className="flex flex-col mr-2.5">
                <Link href={categoryUrl}>
                  <div className="flex items-center justify-center icon">
                    {<Icon/>}
                  </div>
                  <span className="flex items-center justify-center text-center">
                      {category.name}
                    </span>
                </Link>
              </SwiperSlide>
            )
          })}
          <SwiperSlide className="flex flex-col mr-2.5">
            <Link href={route('shop.markdown')}>
              <div className="flex items-center justify-center icon">
                {<IconFire/>}
              </div>
              <span className="flex items-center justify-center text-center">Уценка</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="products-box products-container bg-white mb-5">
        <div className="group-wrapper">
          <Link className="flex mb-2.5 mt-5 items-center w-full">
            <span>Акция: До конца акции</span>
            <span className="group-icon flex text-orange items-center">
                <FontAwesomeIcon icon="fa-solid fa-chevron-circle-right"/>
              </span>
            <div className="countdown flex ml-2.5">
              <div className="countdown-time flex flex-row items-center w-auto h-auto">
                <span>30</span>
                <span>дней</span>
              </div>
              <div className="countdown-time flex flex-row items-center w-auto h-auto">
                <span>1</span>
                <span>часов</span>
              </div>
              <div className="countdown-time flex flex-row items-center w-auto h-auto">
                <span>10</span>
                <span>минут</span>
              </div>
              <div className="countdown-time flex flex-row items-center w-auto h-auto">
                <span>00</span>
                <span>секунд</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap">
          {products.map((product, index) => (
            <ProductCard key={index} product={product}/>
          ))}
        </div>
      </div>
      <div className="products-container bg-white mb-5">
        <div className="group-wrapper">
          <Link className="flex mb-2.5 mt-5 justify-center">
            <span>Лучшая цена</span>
            <span className="group-icon flex text-orange items-center">
                <FontAwesomeIcon icon="fa-solid fa-chevron-circle-right"/>
              </span>
          </Link>
        </div>

        <div className="flex flex-wrap">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;
