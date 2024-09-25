import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import corporateImg from '../../../images/corporate_desktop.jpg'

const CorporateDepartment = () => {
  return (
    <>
      <Head title="Корпоративный отдел" />

      <ContentBox title="Корпоративный отдел" className="mb-5">
        <img src={corporateImg} className="w-full" alt="Информация для юридических лиц"/>
      </ContentBox>

      <ContentBox className="mb-5">
        <div className="max-w-[865px] mx-auto">
          <p className="text-center mb-5">
            Для покупки товара по безналичному расчету вышлите по адресу <strong>korporativ@steelsmart.shop</strong>:
          </p>
          <p className="text-center">
            - Выписку из ЕГРЮЛ РФ по Вашей организации;
          </p>
          <p className="text-center">
            - ФИО, должность и номер контактного телефона;
          </p>
          <p className="text-center mb-5">
            - Перечень товара для закупки.
          </p>
          <p className="text-center">
            Если Вы не любите писать письма, просто позвоните по номеру:
          </p>
          <p className="text-center">
            <strong>
              +7949 500-03-05, с понедельника по пятницу с 9.00 до 18.00, суббота-воскресенье выходные
            </strong>
          </p>
          <h2 className="text-center my-5 border-t-2 border-orange text-xl pt-5">
            Полезная информация:
          </h2>
          <ul className="mb-10 list-disc list-inside">
            <li>
              Мы работаем с бюджетом и организациями любой формы собственности.
            </li>
            <li>
              Наше предприятие состоит на общей системе налогообложения.
            </li>
            <li>
              Стоимость товара по безналу = стоимости за наличный расчет.
            </li>
            <li>
              Доставка по ДНР при покупке от 5 тыс. руб.
            </li>
            <li>
              Нашим ценам тяжело противостоять конкурентам. Тем не менее, мы снизим цену для Вас,
              если предоставите более выгодное предложение в нашем регионе.
            </li>
            <li>
              Мы уважаем наших Клиентов и ценим взаимовыгодное сотрудничество.
            </li>
          </ul>
          <p className="text-right">
            С уважением, cеть магазинов электроники «Steel<span className="text-orange">Smart</span>»
          </p>
        </div>
      </ContentBox>
    </>
  )
}

export default CorporateDepartment
