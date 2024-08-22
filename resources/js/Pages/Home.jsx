import { Link } from '@inertiajs/react'
import { categoryIcons } from '@/Constants'
import IconFire from '@/Components/Icons/IconFire'
import subCatImage from '../../images/subcategory-image.jpeg'
import brandImg from '../../images/brands/brand.svg'
import allBrandsImg from '../../images/brands/all_brands.svg'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import MainSlider from '@/Components/MainSlider'

const Home = ({categories}) => {
    const [openSubCategoryMenu, setOpenSubCategoryMenu] = useState({
      state: true,
      item: null
    })

    return (
        <>
          <div className="flex flex-row">
            <div className="hidden md:flex categories-box">
              <ul className="flex flex-col py-2.5">
                {categories && categories.map((category, parentIndex) => {
                  let Icon = categoryIcons[category.icon]
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
                      <Link href={category.url_address}>{category.name}</Link>
                      <div
                        className={`second-level-menu ` + (openSubCategoryMenu.state && openSubCategoryMenu.item === parentIndex ? 'opacity-1 visible' : 'invisible opacity-0')} >
                        <ul>
                          {category.children.map((child, index) => {
                            return (
                              <li key={index}>
                                <Link href={child.url_address}>
                                  <h4>{child.name}</h4>
                                </Link>
                                <img src={subCatImage} alt="Техника для дома"/>
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
                  <Link href={'/'}>Уценка</Link>
                </li>
              </ul>
            </div>
            <div className="slider-wrap flex flex-col w-full">
              <div className="flex leading-[0]">
                <MainSlider />
              </div>

              <div className="brands mt-5 hidden md:flex flex-row">
                <div className="bs-item">
                  <Link>
                    <img src={allBrandsImg} alt="All brands"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
                <div className="bs-item">
                  <Link>
                    <img src={brandImg} alt="Brand logo"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Home;
