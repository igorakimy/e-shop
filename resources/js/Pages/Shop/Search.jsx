import { Head, Link, router, usePage } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import Pagination from '@/Components/Pagination'
import ImageNotFound from '@/Components/Images/ImageNotFound'
import { useEffect, useState } from 'react'

const Search = ({title}) => {

  const [showFilterModal, setShowFilterModal] = useState(false)
  const [urlParams, setUrlParams] = useState({})

  const {searchResults} = usePage().props

  const toggleFilter = (e) => {
    if (e.target.checked) {
      urlParams[`${e.target.name}`] = e.target.value
    } else {
      delete urlParams[`${e.target.name}`]
    }

    setShowFilterModal(true)
    setUrlParams({...urlParams})
  }

  const getFiltersForInfo = () => {
    return Object.entries(urlParams).filter(([key, value]) => {
      return ![
        'page',
        'sort',
        'query',
        'filter[exist][0]',
        'filter[price][from]',
        'filter[price][to]',
      ].includes(key)
    })
  }

  const applyFilters = () => {
    urlParams['page'] = '1'
    router.get(window.location.href.split('?')[0], urlParams, {
      onSuccess: page => {
        setShowFilterModal(false)
      },
      onError: errors => {},
      preserveState: true
    })
  }

  const resetFilters = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(window.location.search)
    params.delete('category');
    setUrlParams(Object.fromEntries(params))
    setShowFilterModal(false)
    router.get(window.location.href.split('?')[0], Object.fromEntries(params), {
      preserveState: true
    })
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    // params.delete('query')
    setUrlParams(Object.fromEntries(params))
    console.log(urlParams)
  }, [])

  return (
    <>
      <Head title={title}/>

      <div
        className={`${showFilterModal ? 'opacity-100' : 'opacity-0 hidden'} filter-bg fixed left-0 top-0 w-full h-full`}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setShowFilterModal(false)
          }
        }}
      >
        <div className="fb-wrap flex mx-auto">
          <div className="p-5 rounded bg-white">
            <p className="text-black text-center">Выберите все необходимые фильтры</p>
            <div className="flex justify-center mt-5">
              <button
                className="flex items-center text-black px-[25px] py-3.5 rounded cursor-pointer bg-orange hover:underline"
                onClick={applyFilters}
              >
                Показать товары
              </button>
              <Link
                onClick={(e) => resetFilters(e)}
                className="px-[25px] py-3.5 ml-5 border-2 border-[#ccc] rounded cursor-pointer hover:underline"
              >
                Сбросить фильтры
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="catalog-box flex">
        <div className="filter-box hidden lg:flex flex-col min-w-[268px] max-w-[268px] z-[12] pb-5 mt-5">

          <div className={`${getFiltersForInfo().length > 0 ? 'flex' : 'hidden'} flex-col py-5 bg-white rounded-md mb-5`}>
            <Link
              onClick={(e) => resetFilters(e)}
              className="filter-reset flex justify-center items-center text-white h-[30px] text-sm uppercase font-semibold bg-orange hover:text-black border-2 border-transparent hover:border-orange hover:bg-white rounded cursor-pointer m-[15px] mt-0 mb-5 text-center"
            >
              Сбросить фильтры
            </Link>
            <div className="flex flex-wrap px-[15px] text-sm">
              <p className="mb-2.5 w-full font-semibold">Вы выбрали:</p>
              {getFiltersForInfo().map(([key, value]) => {
                return <label
                  key={key}
                  className="px-[3.5px] border border-orange rounded mr-[5px] mt-[5px]">{value}</label>
              })}
            </div>
          </div>

          <form action="" className="filters-form new-labels flex flex-col bg-white pt-5 rounded-md">
            <section className="flex flex-col mb-2.5">
              <h4 className="text-sm">Категории</h4>
              <div className="px-5">
                {Object.entries(searchResults.categories).map(([category, count], index) => (
                  <p key={category} className="filter-item-line flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      autoComplete="off"
                      onChange={toggleFilter}
                      id={`category_${index}`}
                      checked={urlParams[`category`] != null && urlParams[`category`] === category}
                    />
                    <label htmlFor={`category_${index}`}>{category}</label>
                  </p>
                ))}

              </div>
            </section>
          </form>
        </div>

        <div className="flex flex-col mx-0 px-2.5 md:px-0 lg:ml-5 md:mx-0 mt-5 w-full">
          <h1 className="text-xl font-semibold mb-5">Найдено: {searchResults.resultsCount} товаров</h1>

          <ContentBox className="!p-0 !mt-0 mb-5 overflow-hidden">
            {searchResults.products.data.length > 0 ? (
              <>
                <div
                  className="products-container products-line flex flex-wrap !rounded-none !border-t !border-t-[#ededed]">
                  {searchResults.products.data && searchResults.products.data.map((product, index) => (
                    <ProductCard key={index} className="product-catalog-card" product={product}/>
                  ))}
                </div>
              </>
            ) : (
              urlParams ? (
                <div className="flex flex-col w-full items-center py-5">
                  <ImageNotFound className="w-[300px] h-[70px] opacity-20"/>
                  <p className="mt-5 text-xl uppercase text-[#999] font-semibold">
                    Не найдено товаров по указанному запросу
                  </p>
                </div>
              ) : (
                <p>В данной категории товары отсутствуют</p>
              )
            )}
          </ContentBox>

          {searchResults.products.data.length > 0 && (
            <Pagination items={searchResults.products} className="mb-5 !mt-0" />
          )}
        </div>
      </div>
    </>
  )
}

export default Search
