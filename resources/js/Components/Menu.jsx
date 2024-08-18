import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconUser from '@/Components/Icons/IconUser'
import IconCompare from '@/Components/Icons/IconCompare'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import { Link } from '@inertiajs/react'
import IconMenu from '@/Components/Icons/IconMenu'
import { route } from 'ziggy-js'
import DropdownMenu from '@/Components/ui/DropdownMenu'
import { useState } from 'react'

const Menu = () => {

  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div className="!sticky top-0 menu bg-orange-500">
      <nav className="max-width flex justify-between justify-items-center align-middle h-full">
        <div className="open-main-menu md:hidden flex items-center">
          <IconMenu style={{height: "20px", fill: "#fff"}} className="cursor-pointer" />
        </div>

        <Link href={route('shop')} className="all-categories hidden md:flex items-center mr-5">
          <FontAwesomeIcon icon="fa-solid fa-align-justify" className="mr-4"/>
          <span>Каталог товаров</span>
        </Link>

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
            <IconCompare style={{enableBackground: "new 0 0 31 30"}} />
          </Link>
        </div>
        <div className="hidden md:flex header-button">
          <Link title="Избранные товары" href={route('favorite')}>
            <IconFavorite />
          </Link>
        </div>
        <div className="header-button cart-button">
          <Link title="Корзина" href={route('cart')}>
            <IconCart />
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
              <IconUser style={{minHeight: "25px !important", fill: "#fff !important"}} />

              <DropdownMenu className={'account-dropdown-menu text-black flex flex-col !right-0 !top-full ' + (openDropdown ? '' : 'hidden')}>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('orders')}>Заказы</Link>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('compare')}>Сравнение товаров</Link>
                <Link className="flex text-nowrap text-sm hover:underline" href={route('favorite')}>Избранные товары</Link>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
