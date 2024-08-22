import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconUser from '@/Components/Icons/IconUser'
import IconCompare from '@/Components/Icons/IconCompare'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import { Link, router } from '@inertiajs/react'
import IconMenu from '@/Components/Icons/IconMenu'
import { route } from 'ziggy-js'
import DropdownMenu from '@/Components/ui/DropdownMenu'
import { useState } from 'react'
import { categoryIcons } from '@/Constants'
import subCatImage from '../../images/subcategory-image.jpeg'
import IconFire from '@/Components/Icons/IconFire'

const Menu = ({categories}) => {

  const [openDropdown, setOpenDropdown] = useState(false)
  const [openCatalogDropdown, setOpenCatalogDropdown] = useState(false)
  const [openSubCategoryMenu, setOpenSubCategoryMenu] = useState({
    state: true,
    item: null
  })

  const redirectToCatalog = (e) => {
    e.preventDefault();
    if(e.target === e.currentTarget) {
      setOpenCatalogDropdown(false)
      router.visit('/shop')
    }
  }

  return (
    <div className="!sticky top-0 menu bg-orange-500">
      <nav className="max-width flex justify-between justify-items-center align-middle h-full">
        <div className="open-main-menu md:hidden flex items-center">
          <IconMenu style={{height: "20px", fill: "#fff"}} className="cursor-pointer" />
        </div>

        <div
          className="all-categories hidden md:flex items-center mr-5 relative cursor-pointer"
          onClick={redirectToCatalog}
          onMouseOver={() => setOpenCatalogDropdown(true)}
          onMouseLeave={() => setOpenCatalogDropdown(false)}
        >
          <FontAwesomeIcon onClick={redirectToCatalog} icon="fa-solid fa-align-justify" className="mr-4"/>
          <span onClick={redirectToCatalog} className="font-semibold select-none">Каталог товаров</span>
          <div
            className={`categories-box md:flex flex-wrap !h-auto !absolute top-full left-0 ` + (openCatalogDropdown && window.location.href.replace(/\/+$/, '') !== route('home') ? 'opacity-1 visible' : 'opacity-0 invisible')}
            onMouseLeave={() => setOpenCatalogDropdown(false)}
          >
            <ul className="flex flex-col py-2.5 bg-white text-black">
              {categories && categories.map((category, parentIndex) => {
                let Icon = categoryIcons[category.icon]
                return (
                  <li
                    key={parentIndex}
                    className="flex flex-row justify-items-center items-center text-sm px-2.5 cursor-pointer hover:underline"
                    onMouseOver={() => setOpenSubCategoryMenu({state: true, item: parentIndex})}
                    onMouseLeave={() => setOpenSubCategoryMenu({state: false, item: parentIndex})}
                  >
                    <div className="category-icon flex justify-items-center justify-center items-center mr-2.5">
                      {<Icon className="h-full block align-middle"/>}
                    </div>
                    <Link href={category.url_address}>{category.name}</Link>
                    <div
                      className={`second-level-menu ` + (openSubCategoryMenu.state && openSubCategoryMenu.item === parentIndex ? 'opacity-1 visible' : 'invisible opacity-0')}>
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
        </div>

        <section className="flex search-box">
          <form className="flex w-full">
            <input type="search" name="query" autoComplete="off" placeholder="Поиск товаров"/>
            <button className="search-button flex justify-center items-center cursor-pointer bg-white" type="submit">
              <FontAwesomeIcon icon="fa-solid fa-search"/>
            </button>
          </form>
        </section>

        <div className="hidden md:flex header-button">
          <Link title="Сравнение товаров" href={route('compare')}>
            <IconCompare style={{enableBackground: "new 0 0 31 30"}}/>
          </Link>
        </div>
        <div className="hidden md:flex header-button">
          <Link title="Избранные товары" href={route('favorite')}>
            <IconFavorite/>
          </Link>
        </div>
        <div className="header-button cart-button">
          <Link title="Корзина" href={route('cart')}>
            <IconCart/>
          </Link>
        </div>

        <div className="hidden md:flex">
          <div className="flex justify-items-center text-white ml-2 cursor-pointer">
            <div
              className="signed-in-box flex items-center border-white px-4 py-1.5 my-1.5 border-2 rounded-md relative"
              onMouseOver={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <span className="mr-4">Войти</span>
              <IconUser style={{minHeight: "25px !important", fill: "#fff !important"}}/>

              <DropdownMenu
                className={'account-dropdown-menu text-black flex flex-col !right-0 !top-full ' + (openDropdown ? '' : 'hidden')}>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('orders')}>Заказы</Link>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('compare')}>Сравнение
                  товаров</Link>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('favorite')}>Избранные
                  товары</Link>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
