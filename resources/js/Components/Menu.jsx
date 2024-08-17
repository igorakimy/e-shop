import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconUser from '@/Components/Icons/IconUser'
import IconCompare from '@/Components/Icons/IconCompare'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import { Link } from '@inertiajs/react'
import IconMenu from '@/Components/Icons/IconMenu'
import { route } from 'ziggy-js'

const Menu = () => {
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
          <Link href="/">
            <IconCompare style={{enableBackground: "new 0 0 31 30"}} />
          </Link>
        </div>
        <div className="hidden md:flex header-button">
          <Link title="Избранное" href="/">
            <IconFavorite />
          </Link>
        </div>
        <div className="header-button cart-button">
          <Link href="/">
            <IconCart />
          </Link>
        </div>

        <div className="hidden md:flex">
          <div className="flex justify-items-center text-white ml-2 cursor-pointer">
            <div className="signed-in-box flex items-center border-white px-4 py-1.5 my-1.5 border-2 rounded-md">
              <span className="mr-4">Войти</span>
              <IconUser style={{minHeight: "25px !important", fill: "#fff !important"}} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
