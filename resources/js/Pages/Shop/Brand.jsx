import brandImg from '../../../images/brands/brand.svg'
import { Head, Link } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentBox from '@/Components/ui/ContentBox'
import ProductCard from '@/Components/ProductCard'
import DefaultButton from '@/Components/ui/DefaultButton'

const Brand = () => {
  return (
    <>
      <Head title="Brand"/>

      <div className="flex flex-col bg-white p-5 mt-5 border-4 border-orange rounded">

        <div className="flex justify-center">
          <img src={brandImg} alt="Brand logo"/>
        </div>

        <p className="flex justify-center items-center mt-5">
          <span className="font-semibold mr-5">Сайт производителя:</span>
          <Link href="https://global.1more.com" target="_blank" className="hover:underline mr-2.5">
            <span className="text-orange">global.1more.com</span>
          </Link>
          <FontAwesomeIcon icon="fa-solid fa-external-link-alt" className="text-orange"/>
        </p>

        <div className="brand-text text-base px-[100px] mt-[40px]">
        <span>
          <p>
            Компания 1MORE основана в 2013 году и является дочерней компанией
            компании　Xiaomi, активно развивающаяся в направлении производства
            аудиотехники.В 2014 году через Mi Store компания 1more продала около
            10 миллионов своих гарнитур. Компания получила успех и признание на
            родном рынке, а их наушники стали одними из самых узнаваемых гарнитур
            на E-commerce площадках в мире
          </p>
        </span>
        </div>
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
          <DefaultButton className="mt-5" text="Показать ещё (28)" />
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
          <DefaultButton className="mt-5" text="Показать ещё (28)" />
        </ContentBox>
      </div>

      <div className="mb-5"></div>
    </>

  )
}

export default Brand
