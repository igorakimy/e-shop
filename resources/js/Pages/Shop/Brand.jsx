import { Head } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'

const Brand = ({brand}) => {

  return (
    <>
      <Head title={`Бренд ${brand.name}`}/>

      <div className="flex flex-col bg-white p-5 mt-5 border-4 border-orange rounded">
        <div className="flex justify-center">
          {brand.icon ? (
            <img src={brand.icon} alt={`${brand.name}, steelsmart`}/>
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

      <div id="products-box">
        <ContentBox title="Аудиотехника" className="">
          <div className="flex flex-wrap">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard photos={[1, 2]}/>
          </div>
          <div className="flex justify-center">
            <DefaultButton className="mt-5" text="Показать ещё (28)"/>
          </div>
        </ContentBox>
      </div>

      <div id="products-box">
        <ContentBox title="Аудиотехника" className="">
        <div className="flex flex-wrap">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard photos={[1, 2]}/>
          </div>
          <div className="flex justify-center">
            <DefaultButton className="mt-5" text="Показать ещё (28)"/>
          </div>
        </ContentBox>
      </div>

      <div className="mb-5"></div>
    </>

  )
}

export default Brand
