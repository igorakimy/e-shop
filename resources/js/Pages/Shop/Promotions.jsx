import ContentBox from '@/Components/ui/ContentBox'
import { Head, Link } from '@inertiajs/react'
import { route } from 'ziggy-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Promotions = ({promotions}) => {
  return (
    <>
      <Head title="Акции" />

      {promotions && promotions.length > 0 ? (
        <div className="flex flex-col w-full pt-5 bg-transparent">
          <div className="w-full h-full p-5 bg-none bg-transparent">
            <h1 className="mb-5 text-2xl">Аукционные предложения Steelsmart</h1>

            <div className="flex">
              {promotions.map((promotion, index) => (
                <div key={index} className="box-promotions flex flex-col py-5 text-black">
                  <p className="font-semibold text-base mt-0 mb-5">
                    {promotion.name}
                  </p>

                  <Link href={route('promotion', promotion.id)}>
                    <img
                      className="w-full"
                      src={promotion.preview}
                      alt={promotion.name}
                      title={promotion.name}
                    />
                  </Link>

                  <div className="flex mt-5">
                    <Link
                      className="text-orange whitespace-nowrap"
                      href={route('promotion', promotion.id)}
                    >
                      <span className="font-semibold">ПОДРОБНЕЕ</span>
                      <FontAwesomeIcon className="ml-[5px]" icon="fa-solid fa-angle-right" aria-hidden={true} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ContentBox title="Акции">
          <p>В данный момент на сайте нет действующих предложений по Вашему запросу, но Вы можете ознакомиться с другими
            разделами нашего сайта, или <Link className="text-orange" href={route('shop')}>перейти к покупкам</Link>
          </p>
        </ContentBox>
      )}
    </>
  )
}

export default Promotions
