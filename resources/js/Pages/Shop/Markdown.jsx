import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'

const Markdown = ({productGroups}) => {
  return (
    <>
      <Head title="Уцененные товары"/>

      <div className="flex flex-col bg-white p-5 mt-5 border-4 border-orange rounded">
        <div className="flex justify-center">
          <h1 className="text-2xl font-semibold">Уцененные товары</h1>
        </div>
      </div>

      {productGroups && productGroups.map((group, index) => (
        <div key={index} className="products-box">
          <ContentBox title={group.category} className="">
            <div className="flex flex-wrap">
              {group.products.map((product, index) => (
                <ProductCard key={index} product={product}/>
              ))}
            </div>
            <div className="flex justify-center">
              <DefaultButton className="mt-5" text="Показать ещё (28)"/>
            </div>
          </ContentBox>
        </div>
      ))}
    </>
  )
}

export default Markdown
