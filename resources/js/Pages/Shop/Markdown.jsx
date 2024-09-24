import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useState } from 'react'

const Markdown = ({productGroups}) => {

  const groupsState = {}

  for (const group of productGroups) {
    const groupProductsArr = useState()
    groupsState[group.category] = {
      val: groupProductsArr[0] || 5,
      fn: groupProductsArr[1]
    }
  }

  return (
    <>
      <Head title="Уцененные товары"/>

      <div className="flex flex-col bg-white p-5 mt-5 border-4 border-orange rounded">
        <div className="flex justify-center">
          <h1 className="text-2xl font-semibold">Уцененные товары</h1>
        </div>
      </div>

      {productGroups && productGroups.map((group, index) => {
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
    </>
  )
}

export default Markdown
