import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import { useState } from 'react'
import { route } from 'ziggy-js'
import IconArrowRight from '@/Components/Icons/IconArrowRight'

const DeliveryAndPayment = () => {

  const [activeTab, setActiveTab] = useState('tab1')

  const toggleHiddenClass = (e) => {
    const content = e.currentTarget.nextElementSibling
    const isHidden = content.classList.contains('hidden')
    if (isHidden) {
      content.classList.remove('hidden')
      content.classList.add('block')
    } else {
      content.classList.remove('block')
      content.classList.add('hidden')
    }
  }

  return (
    <>
      <Head title="Доставка и оплата" />

      <ContentBox title="Доставка и оплата">
        <div className="mb-2">
          <button
            onClick={() => setActiveTab('tab1')}
            className="py-[1px] px-[6px] bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-50 border border-black text-sm rounded-sm mr-1"
          >
            Доставка
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className="py-[1px] px-[6px] bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-50 border border-black text-sm rounded-sm"
          >
            Способы оплаты
          </button>
        </div>

        <div className={activeTab === 'tab1' ? 'block' : 'hidden'}>
          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Адресная доставка</span>
          </div>
          <div className="collapse-content pt-5 pl-[5px] mb-5">
            <p className="mb-[30px]">
              Наш курьер доставит заказ по указанному адресу с <span className="text-orange">12:00 до 21:00
              в течение 1-3 дней. В согласованный день доставки логистическая
              служба компании заранее созванивается с клиентами</span>:
            </p>
            <p className="mb-2.5">
              Понедельник-четверг и суббота - доставка по Донецку и Макеевке.
              Доставка осуществляется через день после оформления заказа.
            </p>
            <p className="mb-2.5">
              Четверг - доставка в Мариуполь и Приазовье.
            </p>
            <p className="mb-[30px]">
              Пятница - доставка в Енакиево, Снежное, Амвросиевку, Докучаевск,
              Еленовку, Зугрэс, Иловайск, Кировское, Старобешево, Тельманово,
              Торез, Углегорск, Харцызск, Шахтёрск, Юнокоммунаровск и другие города.
            </p>
            <ul className="mb-[30px] list-inside list-disc">
              <li className="text-orange">
                Бесплатная доставка - при заказе на сумму 2000 руб. по Донецку и Макеевке.
                От 7000 руб. в другие города.
              </li>
              <li>
                Платная доставка - 250 руб при заказе на сумму менее 2000 руб. по Донецку и Макеевке.
                Стоимость доставки в другие города рассчитывает менеджер.
              </li>
            </ul>
            <p className="mb-2.5">Занос техники:</p>
            <p className="mb-2.5">
              Занос осуществляется за порог квартиры / дома / помещения! Стоимость переноса по квартире / дому /
              помещению оговаривается отдельно с курьерами, осуществляющими доставку.
            </p>
            <p className="mb-2.5">
              Служба доставки вместе с клиентом проверяет товар на отсутствие
              механических повреждений, сколов, царапин, а также на полноту
              комплектности и наличие гарантийной документации. Работоспособность
              товара служба доставки не проверяет (условия проверки товара можно
              уточнить у менеджера).
            </p>
            <p className="mb-[30px]">
              Дополнительную информацию уточняйте у продавцов-консультантов интернет-магазина.
            </p>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Резерв в магазине</span>
          </div>
          <div className="collapse-content pt-5 pl-[5px] mb-5">
            <p className="mb-2.5">
              Минимальная сумма заказа - <span className="text-orange">отсутствует</span>, услуга является <span className="text-orange">бесплатной</span>.
            </p>
            <p className="mb-2.5">
              Мы предлагаем зарезервировать товар в любом из наших магазинов. <br/>
              Забрать его Вы можете самостоятельно в пунктах выдачи в день оформления заказа.
            </p>
            <p>
              С пунктами выдачи Вы можете ознакомиться по <Link href={route('shops')} className="text-orange font-semibold">ссылке</Link>
            </p>
          </div>
        </div>
        <div className={activeTab === 'tab2' ? 'block' : 'hidden'}>
          <p className="mb-2.5">
            - Оплата при доставке курьером осуществляется наличными или картой
          </p>
          <p>
            - Оплата в магазине осуществляется <span className="text-orange">наличными</span> или <span className="text-orange">картой</span>
          </p>
        </div>
      </ContentBox>
    </>
  )
}

export default DeliveryAndPayment
