import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const WarrantyTerms = () => {
  return (
    <>
      <Head title="Условия гарантийного обслуживания" />

      <ContentBox title="УСЛОВИЯ ГАРАНТИЙНОГО ОБСЛУЖИВАНИЯ" className="mb-5">
        <p className="text-center mb-3.5">
          Уважаемые клиенты компании SteelSmart, просим вас ознакомиться
          с регламентом гарантийного обслуживания.
        </p>
        <p className="text-center mb-3.5">
          Техника, продаваемая в магазинах нашей компании, новая,
          имеет надлежащее качество и гарантию от фирмы производителя.
        </p>

        <div className="text-left mb-8">
          <p><strong>Гарантийное обслуживание осуществляется:</strong></p>
          <p>
            1) При наличии правильно оформленного гарантийного талона с
            указанием даты продажи, серийного номера и модели товара, чёткой подписи продавца и клиента.
          </p>
          <p>
            2) При отсутствии физических, тепловых и электрических повреждений,
            следов вскрытия товара, попадания влаги, пыли, насекомых, инородных предметов.
          </p>
          <p>
            3) При наличии полного комплекта поставки и целостности упаковки от производителя.
          </p>
          <p>
            4) Гарантийный, ремонт производится только в сертифицированном
            сервисном центре производителя или его авторизированном партнёре.
          </p>
        </div>

        <div className="text-left mb-8">
          <p><strong>Гарантийное обслуживание не производится:</strong></p>
          <p>
            1) Если потребитель нарушил правила транспортировки, условия
            установки и эксплуатации товара, указанных в инструкции к изделию,
            либо товар использовался не по назначению.
          </p>
          <p>
            2) При наличии признаков повреждений от сбоев или несоответствия
            стандартам параметров электропитания и телекоммуникационных линий,
            использованием ненадлежащих расходных материалов и несовместимых устройств.
          </p>
          <p>
            3) Для техники, которая вышла из строя по причине стихийных бедствий и природных явлений.
          </p>
          <p>
            4) Для техники, характеристики которой были изменены потребителем в процессе эксплуатации.
          </p>
          <p>
            5) Для техники, техническое обслуживание которой не было произведено в срок.
          </p>
          <p>
            6) Гарантийное обслуживание не распространяется на все виды расходных материалов.
          </p>
          <p>
            7) Гарантия не распространяется на комплектующие, которые использовались для добычи криптовалюты.
          </p>
        </div>

        <div className="text-left mb-8">
          <p><strong>Наша компания не несёт ответственности:</strong></p>
          <p>
            1) За несоответствующее, несовместимое с оборудованием программное
            обеспечение, его некорректную настройку, отладку и работу в процессе
            эксплуатации потребителем, выход программного обеспечения из строя
            или его некорректную работу в связи с установкой приложений
            потребителем или действий вирусов и вредоносных программ.
          </p>
          <p>
            2) За информацию, утерянную потребителем в процессе ремонта или эксплуатации товара.
          </p>
          <p>
            3) За утраты, связанные с коммерческой или производственной деятельностью
            потребителя связанные с использованием, выходом из строя или невозможностью использования товара.
          </p>
          <p>
            4) За утрату потребителем гарантийного талона, аксессуаров комплекта поставки и упаковочного материала.
          </p>
          <p>
            5) За потерю данных в результате выхода из строя носителя информации: жёсткого диска, флешки, карты памяти.
          </p>
        </div>

        <div className="text-left">
          <p><strong>Компания производитель не несёт ответственности:</strong></p>
          <p>
            1) Производители печатной техники и копировальных устройств не
            предоставляют гарантию на расходные материалы: струйные, лазерные
            картриджи, чернила, тонера, системы СНПЧ и другие расходные материалы,
            поставляемые в комплекте с аппаратом.
          </p>
          <p>
            2) Производители ноутбуков, планшетов, смартфонов не предоставляют
            годичную гарантию на зарядное устройство, аккумулятор, поставляемые
            в комплекте с ноутбуком, планшетом, смартфоном. Гарантия на зарядное
            устройство 1-3 месяца, гарантия на батарею 3-9 месяцев в зависимости
            от фирмы производителя и модели ноутбука, планшета, смартфона.
            Более детальную информацию можно получить на сайте производителя
            или в авторизированном сервисном центре.
          </p>
          <p>
            3) Производители, компьютерных комплектующих не предоставляют
            гарантию на оборудование эксплуатация которых, производилась в
            нештатном режиме либо в условиях, не предусмотренных производителем,
            а также если потребитель ис-пользовал сторонние прошивки и утилиты
            для увеличения производительности устройств.
          </p>
        </div>
      </ContentBox>
    </>
  )
}

export default WarrantyTerms
