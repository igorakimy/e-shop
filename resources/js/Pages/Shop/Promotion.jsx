import { Head, Link } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { route } from 'ziggy-js'
import CountdownTimer from '@/Components/CountdownTimer'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useState } from 'react'

const Promotion = ({promotion, promotionProductGroups}) => {

  const groupsState = {}

  for (const group of promotionProductGroups) {
    const groupProductsArr = useState()
    groupsState[group.category] = {
      val: groupProductsArr[0] || 5,
      fn: groupProductsArr[1]
    }
  }

  return (
    <>
      <Head title={`Акция - ${promotion.name}`}/>

      <div className="flex flex-col w-full pt-5 bg-transparent">
        <Link
          href={route('promotions')}
          className="text-orange mb-5 ml-2 w-fit"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-long-arrow-alt-left"
            className="mr-[5px]"
            fontStyle={'normal'}
            fontSize={14}
          />
          Вернуться к списку акций
        </Link>

        <div className="promotion-wrap mb-5 flex flex-col md:flex-row items-center bg-white">
          <div className="flex">
            <img
              src={promotion.preview}
              alt={promotion.name}
              title={promotion.name}
            />
          </div>
          <div className="flex flex-col p-5 w-full md:w-auto">
            <p className="w-full mt-0 mb-[5px] text-orange font-semibold">
              ({(new Date(promotion.started_at)).toLocaleDateString()} - {(new Date(promotion.ended_at)).toLocaleDateString()})
            </p>
            <h1 className="my-0 text-2xl mb-2.5">{promotion.name}</h1>
            <div
              id="countdown"
              className="countdown flex flex-row md:flex-col xl:flex-row items-center md:items-baseline mt-7"
            >
              <p className="text-black text-left flex align-middle">До конца акции:</p>
              <div className="flex ml-2 md:ml-0 xl:ml-2">
                <CountdownTimer
                  endDate={Date.parse(promotion.ended_at)}
                />
              </div>
            </div>
          </div>
        </div>

        {promotionProductGroups && promotionProductGroups.map((group, index) => {
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
              <ContentBox title={group.category}>
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
      </div>
    </>
  )
}

export default Promotion
