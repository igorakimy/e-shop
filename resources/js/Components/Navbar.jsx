import Logo from '@/Components/Logo'
import { navItems } from '@/Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@inertiajs/react'
import { route } from 'ziggy-js'
import IconMenu from '@/Components/Icons/IconMenu'
import DropdownMenu from '@/Components/ui/DropdownMenu'
import { useState } from 'react'

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(false)
  const [openDropdownPhones, setOpenDropdownPhones] = useState(false)

  return (
    <nav className="bg-black">
      <div className="max-width m-0 md:flex md:justify-between md:items-center">
        <div className="md:flex md:items-center md:flex-shrink-0 text-center">
          <Link href='/'>
            <Logo style={{minWidth: "268px"}} className="md:my-2 md:mr-3 px-4 py-7 md:p-0"/>
          </Link>
        </div>

        <ul className="hidden xl:flex lg:ml-6 lg:space-x-5 xl:space-x-10">
          {navItems.map((item, index) => {
            return (
              item.children ?
                <li key={index}
                    className="relative"
                    onMouseOver={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                >
                  <span className="relative text-white font-semibold text-sm">{item.label}</span>
                  <DropdownMenu className={'text-black ' + (openDropdown ? '' : 'hidden')}>
                    {item.children.map((dropdownItem, index) => {
                      return <Link key={index} className="flex text-nowrap text-sm font-semibold hover:underline h-[30px] leading-[30px]" href={dropdownItem.href && route(dropdownItem.href)}>{dropdownItem.label}</Link>
                    })}
                  </DropdownMenu>
                </li> :
                <li key={index}>
                  {item.external ? (
                    <a className="nav-link" href={item.href}>{item.label}</a>
                  ) : (
                    <Link className="nav-link" href={item.href ? route(item.href) : '#'}>{item.label}</Link>
                  )}
                </li>
            )
          })}
        </ul>

        <div
           className="hidden xl:flex justify-center space-x-2 items-center leading-[50px] pr-4 relative"
           onMouseOver={() => setOpenDropdownPhones(true)}
           onMouseLeave={() => setOpenDropdownPhones(false)}
        >
          <a className="space-x-2" href="tel:360">
            <FontAwesomeIcon style={{transform: 'rotate(90deg)'}} className="text-orange text-lg"
                             icon="fa-solid fa-phone-alt"/>
            <span className="text-white font-medium text-xl">360</span>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" className="text-white ml-1"/>
          </a>

          <DropdownMenu className={'phones-dropdown-menu text-nowrap text-sm flex flex-col !right-0 ' + (openDropdownPhones ? '' : 'hidden')} >
            <p className="text-orange font-semibold text-xl">Контактные данные</p>

            <div className="text-gray-400 mt-3 mb-[5px] font-semibold">Интернет-магазин, звонки принимаем с 9 до 21</div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <a href="tel:360">
                  <FontAwesomeIcon icon="fa-solid fa-phone-alt" style={{transform: 'rotate(90deg)'}} className="text-orange mr-1.5"/>
                  <span className="font-semibold">360</span>
                </a>
              </div>
              <div className="flex items-center">
                <a href="tel:79493099990">
                  <FontAwesomeIcon icon="fa-solid fa-phone-alt" style={{transform: 'rotate(90deg)'}} className="text-orange mr-1.5"/>
                  <span className="font-semibold">+7949 30-9999-0</span>
                </a>
              </div>
              <div className="flex items-center">
                <a href="tel:79490999993">
                  <FontAwesomeIcon icon="fa-solid fa-phone-alt" style={{transform: 'rotate(90deg)'}} className="text-orange mr-1.5"/>
                  <span className="font-semibold">+7949 0-99999-3</span>
                </a>
              </div>
            </div>
            <div className="mt-4">
              <a href="https://t.me/steelsmart" target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-telegram" className="text-orange text-3xl" />
              </a>
            </div>
            <div className="text-gray-400 mt-3 mb-[5px] font-semibold">
              Почта интернет магазина
            </div>
            <div>
              <span className="font-semibold">
                <a href="mailto:online@steelsmart.shop">online@steelsmart.shop</a>
              </span>
            </div>
            <div className="text-gray-400 mt-3 mb-[5px] font-semibold">
              Консультации организаций и ИП
            </div>
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon="fa-solid fa-phone-alt" style={{transform: 'rotate(90deg)'}} className="text-orange text-sm mr-1" />
              <span className="font-semibold mr-5">
                <a href="tel:79495000305">+7949 500-03-05</a>
              </span>
              <span className="font-semibold">
                <a href="mailto:korporativ@steelsmart.shop">korporativ@steelsmart.shop</a>
              </span>
            </div>
          </DropdownMenu>
        </div>

        <Link
          className="hidden md:flex xl:hidden justify-center"
          onMouseOver={() => {}}
        >
          <IconMenu style={{fill: "#fff", height: "20px"}}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
