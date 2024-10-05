import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconUser from '@/Components/Icons/IconUser'
import IconCompare from '@/Components/Icons/IconCompare'
import IconCart from '@/Components/Icons/IconCart'
import IconFavorite from '@/Components/Icons/IconFavorite'
import { Link, router, usePage } from '@inertiajs/react'
import IconMenu from '@/Components/Icons/IconMenu'
import { route } from 'ziggy-js'
import DropdownMenu from '@/Components/ui/DropdownMenu'
import { useState } from 'react'
import { categoryIcons } from '@/Constants'
import IconFire from '@/Components/Icons/IconFire'
import { useModal } from '@/Components/Context/ModalContext'
import IconUserProfile from '@/Components/Icons/IconUserProfile'

const Menu = ({categories}) => {

  const {appUrl, currentUser, searchResults} = usePage().props
  const {openModal} = useModal()

  const [openDropdown, setOpenDropdown] = useState(false)
  const [openCatalogDropdown, setOpenCatalogDropdown] = useState(false)
  const [openSubCategoryMenu, setOpenSubCategoryMenu] = useState({
    state: true,
    item: null
  })

  const getSearchValue = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get('query') || ''
  }

  const [searchValue, setSearchValue] = useState(getSearchValue())
  const [showQuickSearchBox, setShowQuickSearchBox] = useState(false)
  const [searchDelayTimeout, setSearchDelayTimeout] = useState(0)

  const redirectToCatalog = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setOpenCatalogDropdown(false)
      router.visit('/shop')
    }
  }

  const handleSearchInputTyping = (query) => {
    setSearchValue(query)

    if (searchDelayTimeout) clearTimeout(searchDelayTimeout)

    const timeout = setTimeout(() => {

      let data = {}
      if (query) {
        data['query'] = query
      }
      router.get(window.location.href.split('?')[0], data, {
        onSuccess: page => {
          setShowQuickSearchBox(query.trim() !== '')
        },
        preserveState: true
      })
    }, 500)

    setSearchDelayTimeout(timeout)
  }

  const handleSearchQuery = (e) => {
    e.preventDefault()
    router.get('/search', {
      query: searchValue
    }, {
      onSuccess: page => {
        setShowQuickSearchBox(false)
      }
    })
  }

  const handleSelectCategory = (category) => {
    const params = new URLSearchParams(window.location.search)
    params.set('category', category)
    router.get('/search', Object.fromEntries(params), {
      onSuccess: page => {
        setShowQuickSearchBox(false)
      }
    })
  }

  return (
    <div className="!sticky top-0 menu bg-orange-500 z-50">
      <div
        className={`search-bg ${showQuickSearchBox ? 'active' : 'hidden'} fixed top-0 left-0 w-full h-full z-[10]`}
        onClick={(e) => setShowQuickSearchBox(false)}
      >
      </div>
      <nav className="max-width flex justify-between justify-items-center align-middle h-full">
        <div className="open-main-menu md:hidden flex items-center">
          <IconMenu style={{height: "20px", fill: "#fff"}} className="cursor-pointer"/>
        </div>

        <div
          className="all-categories hidden md:flex items-center mr-5 relative cursor-pointer"
          onClick={redirectToCatalog}
          onMouseEnter={() => setOpenCatalogDropdown(true)}
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
                let categoryUrl = `${appUrl}/shop/${category.url.address}`
                return (
                  <li
                    key={parentIndex}
                    className="flex flex-row justify-items-center items-center text-sm px-2.5 cursor-pointer hover:underline"
                    onMouseEnter={() => setOpenSubCategoryMenu({state: true, item: parentIndex})}
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
                <Link href={route('markdown')}>Уценка</Link>
              </li>
            </ul>
          </div>
        </div>

        <section className="flex search-box relative">
          <form className="flex w-full">
            <input
              className="text-sm"
              type="search"
              name="query"
              autoComplete="off"
              placeholder="Поиск товаров"
              value={searchValue}
              onChange={(e) => handleSearchInputTyping(e.target.value)}
            />
            <button
              className="search-button flex justify-center items-center cursor-pointer bg-white"
              onClick={handleSearchQuery}
            >
              <FontAwesomeIcon icon="fa-solid fa-search"/>
            </button>
          </form>
          {/* Search response box */}
          <div
            className={`${!showQuickSearchBox ? 'hidden' : ''} search-response absolute top-[100%] bg-white left-0 w-full max-h-[100vh] overflow-auto p-5 rounded-lg`}>
            <div className="text-black font-semibold">
              Найдено результатов: <span className="text-orange">{searchResults.resultsCount}</span>
            </div>

            <div className="search-products flex flex-wrap mt-5">
              {searchResults.products.data && (
                searchResults.products.data.slice(0, 5).map((product, index) => {
                  const productUrl = `${appUrl}/shop/${product.url.address}`
                  return (
                    <div key={index} className="flex items-center w-full p-[5px]">
                      <Link
                        href={productUrl}
                        onClick={(e) => setShowQuickSearchBox(false)}
                        className="flex items-center justify-center mr-2.5 w-full h-full max-w-[50px] max-h-[50px]"
                      >
                        <img src={product.gallery_thumbs[0]} alt="IMG" className="select-none"/>
                      </Link>
                      <div className="flex flex-col text-xs mr-2.5 w-full">
                        <Link
                          href={productUrl}
                          className="h-auto w-full"
                          onClick={(e) => setShowQuickSearchBox(false)}
                        >
                          {product.name} · {product.short_props.split(',').join(' · ')}
                        </Link>
                        <div className="flex mt-[5px]">
                          <p className="text-[#13ce13] font-semibold whitespace-nowrap mr-2.5">В наличии</p>
                          <p className="text-orange font-semibold whitespace-nowrap">{product.price} <span
                            className="text-[10px]">₽</span></p>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
            {Object.entries(searchResults.categories).length > 0 && (
              <div className="search-filters flex flex-wrap mt-2.5">
                {Object.entries(searchResults.categories).map(([category, count]) => (
                  <div
                    key={category}
                    onClick={() => handleSelectCategory(category)}
                    className="p-2.5 text-sm text-black transition-all border-2 border-orange rounded bg-transparent hover:bg-orange cursor-pointer mt-2.5 mr-2.5"
                  >
                    #{category} <span className="font-semibold">({count})</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        <div className="hidden md:flex header-button">
          <Link title="Сравнение товаров" href={route('compare')}>
            <IconCompare className="text-transparent hover:!text-white"
                         style={{enableBackground: "new 0 0 31 30", stroke: "#fff"}}/>
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
          <div
            className="flex justify-items-center text-white ml-2 cursor-pointer"
          >
            <div
              className="signed-in-box flex items-center border-white px-4 py-1.5 my-1.5 border-2 rounded-md relative"
              onMouseOver={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
              onClick={() => !currentUser && openModal('login')}
            >
              {currentUser ? (
                <div className="flex items-center">
                  <span className="flex whitespace-nowrap mr-4">Добро пожаловать, {currentUser.nickname}</span>
                  <IconUserProfile className="h-[28px]"/>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="mr-4">Войти</span>
                  <IconUser style={{minHeight: "25px !important", fill: "#fff !important"}}/>
                </div>
              )}

              {currentUser ? (
                <DropdownMenu
                  className={'account-dropdown-menu text-black flex flex-col !right-[-5px] !top-full ' + (openDropdown ? '' : 'hidden')}>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('users.profile')}>Личный
                    кабинет</Link>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('compare')}> <span>Сравнение товаров <span
                    className="text-orange font-semibold">2</span></span>
                  </Link>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('favorite')}>Избранные
                    товары</Link>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('sign_out')}>Выход</Link>
                </DropdownMenu>
              ) : (
                <DropdownMenu
                  className={'account-dropdown-menu text-black flex flex-col !right-0 !top-full ' + (openDropdown ? '' : 'hidden')}>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('orders')}>Заказы</Link>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('compare')}>Сравнение
                    товаров</Link>
                  <Link className="flex text-nowrap text-sm hover:underline" href={route('favorite')}>Избранные
                    товары</Link>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
