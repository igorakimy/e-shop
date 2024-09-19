import { Head } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useState } from 'react'

const Brand = ({brand, brandProductGroups}) => {

  const groupsState = {}

  for (const group of brandProductGroups) {
    const groupProductsArr = useState()
    groupsState[group.category] = {
      val: groupProductsArr[0] || 5,
      fn: groupProductsArr[1]
    }
  }

  return (
    <>
      <Head title={`Бренд ${brand.name}`}/>

      <div className="flex flex-col bg-white p-5 mt-5 border-4 border-orange rounded">
        <div className="flex justify-center">
          {brand.logo ? (
            <img src={brand.logo} alt={`${brand.name}, steelsmart`}/>
          ) : (
            <p className="text-2xl font-semibold">{brand.name}</p>
          )}
        </div>

        {brand.vendor_url && (
          <p className="flex justify-center items-center mt-5">
            <span className="font-semibold mr-5">Сайт производителя:</span>
            <a href={brand.vendor_url} target="_blank" className="hover:underline mr-2.5">
              <span className="text-orange">{brand.vendor_url}</span>
            </a>
            <FontAwesomeIcon icon="fa-solid fa-external-link-alt" className="text-orange"/>
          </p>
        )}

        {brand.description && (
          <div
            className="brand-text text-base px-0 md:px-[100px] mt-[40px]"
            dangerouslySetInnerHTML={{__html: brand.description}}
          ></div>
        )}
      </div>

      {brandProductGroups && brandProductGroups.map((group, index) => {
        const totalCount = group.products.length
        const countToShow = groupsState[group.category].val
        const handlerFunc = groupsState[group.category].fn

        const increment = countToShow > totalCount
          ? totalCount - 5
          : countToShow + 20

        const remains = countToShow === 5
          ? totalCount - 5
          : (totalCount - countToShow > 0 ? totalCount - countToShow : 0)

        return (
          <div key={index} className="products-box">
            <ContentBox title={group.category} className="">
              <div className="flex flex-wrap">
                {group.products.slice(0, groupsState[group.category].val).map((product, index) => (
                  <ProductCard key={index} product={product}/>
                ))}
              </div>
              {(totalCount > 5 && remains > 0) && (
                <div className="flex justify-center">
                  <DefaultButton
                    className="mt-5"
                    text={`Показать ещё (${remains})`}
                    handleClick={() => handlerFunc(increment)}
                  />
                </div>
              )}
            </ContentBox>
          </div>
        )
      })}
      <div className="mb-5"></div>
    </>
  )
}

export default Brand
