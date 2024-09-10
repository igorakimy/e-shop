import Breadcrumbs from '@/Components/Breadcrumbs'
import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import catalogImg from '../../../images/subcategory-image.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../../Components/ProductCard.jsx";
import Pagination from '@/Components/Pagination'
import PriceRangeSlider from '@/Components/PriceRangeSlider'

const Catalog = ({title, subCategories, products, breadcrumbs}) => {

  return (
    <>
      <Head title={title}/>

      {subCategories && subCategories.length > 0 ? (
        <div className="mt-5">
          <Breadcrumbs items={breadcrumbs}/>

          <div className="title-product mt-5 text-2xl font-semibold text-center">
            <h1>{title}</h1>
          </div>
          <div className="subcategories-container flex flex-wrap mt-5 p-2.5 md:p-0">
            {subCategories && subCategories.map((category) => {
              return (
                <div key={category.id} className="subcategories-item">
                  <Link className="flex" href={category.url_address}>
                    <div className="flex justify-center items-center">
                      <img className="max-w-[156px] max-h-[156px]" src={catalogImg} alt="Catalog image"/>
                    </div>
                    <div className="flex flex-col justify-center items-center ml-[4%] z-[2]">
                      <p className="w-full">{category.name}</p>
                    </div>
                    <span className="more-link">перейти</span>
                    <img className="opacity-bg" src={catalogImg} alt={category.name}/>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="catalog-box flex">
          <div className="filter-box hidden lg:flex flex-col min-w-[268px]">
            <form action="" className="filters-form new-labels flex flex-col bg-white pt-5 rounded-b-md">
              <section className="flex flex-col">
                <h4 className="text-sm">Цена</h4>
                <div className=" mb-3 mt-6 mx-[15px]">
                  <PriceRangeSlider />
                </div>
              </section>
              <section className="flex flex-col mb-2.5">
                <h4 className="text-sm">Наличие</h4>
                <div className="px-5">
                  <p className="filter-item-line flex items-center">
                    <input type="radio" name="filter[exist][0]" value="1" id="exist_0" autoComplete="off"/>
                    <label htmlFor="exist_0">В наличии</label>
                  </p>
                  <p className="filter-item-line flex items-center">
                    <input type="radio" name="filter[exist][0]" value="2" id="exist_1" autoComplete="off"/>
                    <label htmlFor="exist_1">Ожидаемые</label>
                  </p>
                  <p className="filter-item-line flex items-center">
                    <input type="radio" name="filter[exist][0]" value="3" id="exist_2" autoComplete="off"/>
                    <label htmlFor="exist_2">Под заказ</label>
                  </p>
                </div>
              </section>
              <section className="flex flex-col">
                <h4 className="text-sm">Бренд</h4>
                <div className="px-5">
                  <p className="filter-item-line flex items-center">
                    <input type="checkbox" name="filter[brand][0]" value="1" id="brand_0" autoComplete="off"/>
                    <label htmlFor="brand_0">Samsung</label>
                  </p>
                  <p className="filter-item-line flex items-center">
                    <input type="checkbox" name="filter[brand][1]" value="2" id="brand_1" autoComplete="off"/>
                    <label htmlFor="brand_1">Xiaomi</label>
                  </p>
                  <p className="filter-item-line flex items-center">
                    <input type="checkbox" name="filter[brand][2]" value="3" id="brand_2" autoComplete="off"/>
                    <label htmlFor="brand_2">Huawei</label>
                  </p>
                </div>
                <a className="collapsible text-sm px-5 pt-2.5 pb-2.5 text-orange font-semibold cursor-pointer">Показать ещё</a>
              </section>
            </form>
          </div>

          <div className="flex flex-col mx-0 px-2.5 md:px-0 lg:ml-5 md:mx-0 mt-5 w-full">
            <Breadcrumbs items={breadcrumbs}/>
            <ContentBox className="mb-5 !p-2.5">
              <h1 className="text-2xl font-semibold mb-5">{title}</h1>

              {products.data.length > 0 ? (
                <>
                  <div className="flex">
                    <div className="mr-14 mb-5 md:mb-0">
                      <FontAwesomeIcon icon={['fas', 'th']}
                                       className="font-black !text-2xl text-orange mr-4 cursor-pointer"/>
                      <FontAwesomeIcon icon={['fas', 'th-list']}
                                       className="font-black !text-2xl text-neutral-400 cursor-pointer"/>
                    </div>
                    <div className="hidden md:flex items-center mb-5 text-sm">
                      <span className="mr-5">Сортировка: </span>
                      <div className="mr-5 cursor-pointer font-semibold text-orange">дешевые</div>
                      <div className="mr-5 cursor-pointer">дорогие</div>
                      <div className="mr-5 cursor-pointer">популярные</div>
                      <div className="cursor-pointer">по алфавиту</div>
                    </div>
                  </div>

                  <div
                    className="products-container products-line flex flex-wrap !rounded-none !border-t !border-t-[#ededed]">
                    {products.data && products.data.map((product, index) => (
                      <ProductCard key={index} className="product-catalog-card" product={product}/>
                    ))}
                  </div>

                  <Pagination items={products} />

                  <div className="html-style-box p-5 mt-5 bg-white">
                    <h2><strong>Смартфон – работа и игры всегда с тобой</strong></h2>
                    <p>Развитие старых и открытие новых технологий заставляет производителей смартфонов непрерывно
                      выпускать новые модели, которые будут соответствовать всем современным трендам. На фоне этого
                      выбор
                      для не посвящённого в технические особенности человека очень сложный процесс, с которым наш
                      интернет-магазин всегда готов помочь, подсказав все важные нюансы для того, чтобы купить лучший
                      смартфон в ДНР с идеальными параметрами под любые потребности.</p>
                    <h3><strong>Лидеры производства смартфонов</strong></h3>
                    <p>Существует ряд брендов, являющихся неоспоримыми титанами рынка во всём мире. Они всегда первые! А
                      всё благодаря постоянному усовершенствованию используемых технологий и качеству сборки своих
                      продуктов:</p>
                    <ul>
                      <li><a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B10%5D=Samsung"><strong>Samsung</strong></a>&nbsp;–
                        южнокорейский бренд, выпускающий решения разной ценовой категории, как недорогие (бюджетные),
                        так
                        и флагманские премиального класса.
                      </li>
                      <li><a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B11%5D=Xiaomi"><strong>Xiaomi</strong></a>&nbsp;–
                        уверенно зарекомендовавший себя создатель смартфонов из поднебесной. Главная изюминка данного
                        производителя заключается в производстве качественных моделей с отличной начинкой за адекватную
                        стоимость.
                      </li>
                      <li><a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B3%5D=Huawei"><strong>Huawei</strong></a>&nbsp;–
                        один из мировых лидеров по производству цифровой техники. Славится бескомпромиссным качеством и
                        собственными передовыми разработками, которые успешно внедряются во все производимые устройства.
                      </li>
                      <li><a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B9%5D=Realme"><strong>Realme</strong></a>&nbsp;–
                        молодая, стремительно развивающаяся китайская компания. Благодаря своей направленности на
                        молодёжный сегмент и высокому качеству продукта, быстро завоевала доверие на рынке смартфонов.
                      </li>
                      <li><a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B0%5D=BQ"><strong>BQ</strong></a>&nbsp;–
                        отечественный производитель гаджетов. На текущее время один из самых распространённых создателей
                        бюджетных устройств на российском рынке. Отличный вариант для тех, кто хочет современный телефон
                        по невысокой цене с возможностью купить любое решение в ближайшем интернет-магазине Донецка.
                      </li>
                    </ul>
                    <p>Но не стоит забывать о таких популярных брендах, как:&nbsp;<a
                      href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B2%5D=Honor">Honor</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B5%5D=Meizu">Meizu</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B6%5D=Nokia">Nokia</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B8%5D=POCO">POCO</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B4%5D=INOI">INOI</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B7%5D=Oppo">OPPO</a>,&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=1990&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B0%5D=BQ">Fly,</a>&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=3490&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B13%5D=Vivo">Vivo</a>&nbsp;и&nbsp;
                      <a
                        href="https://steelsmart.shop/shop/telefoniya-i-aksessuary/smartfony/?filter%5Bprice%5D%5Bfrom%5D=3490&amp;filter%5Bprice%5D%5Bto%5D=179990&amp;filter%5Bbrend%5D%5B6%5D=Infinix">Infinix</a>&nbsp;они
                      также смогут вас приятно удивить разнообразием и качеством.</p>
                    <h3><strong>Какие характеристики нужно учесть, покупая смартфон?</strong></h3>
                    <p>Чтобы техника работала исправно, без провисаний и проблем, в первую очередь стоит обратить
                      внимание
                      на:&nbsp;<strong>процессор</strong>&nbsp;и количество&nbsp;<strong>оперативной памяти</strong>.
                    </p>
                    <ul>
                      <li><strong>Оперативная память</strong>&nbsp;– отвечает за работу системы и приложений в режиме
                        реального времени. Соответственно, чем больше будет количество установленной памяти и выше
                        частота
                        работы, тем быстрее и комфортнее будут работать ваши приложения. На текущее время можно
                        приобрести
                        смартфон с объемом памяти (RAM) от 512 Мб до невероятных 18 Гб.
                      </li>
                      <li><strong>Процессор</strong>&nbsp;– своего рода «мозг». Он отвечает за обработку всего
                        происходящего в телефоне. Приобретая устройство, помимо выбора максимального количества ядер,
                        обратите внимание на максимально возможную частоту работы процессора, соответственно, чем она
                        будет выше, тем мощнее процессор.
                      </li>
                    </ul>
                    <h3><strong>Профессиональное фото в одно нажатие</strong></h3>
                    <p>Большинство современных смартфонов обладает целым набором камер на все случаи жизни:
                      широкоугольная, телефото и даже ультра широкоугольная, что в паре с искусственным интеллектом,
                      авто
                      фокусировкой и вспомогательными beauty функциями делает профессиональный снимок делом нескольких
                      секунд.</p>
                    <p>Но как же всё-таки купить смартфон с хорошей камерой?</p>
                    <p>В данном вопросе не всегда количество мегапикселей является решающим фактором, так как многое
                      зависит от программного обеспечения. Самый лёгкий путь выбора если камера является самым
                      необходимым
                      модулем в новом девайсе – присмотреться к специализированным моделям, которые позиционируются как
                      камерафоны.</p>
                    <h3><strong>Главное об экране</strong></h3>
                    <p>Одним из главных критериев дисплея – размер. Если вам нужен компактный спутник, который с
                      лёгкостью
                      поместится в ладонь, то подойдёт вариант до 4.7 дюймов включительно.</p>
                    <p>Современные решения, экран которых больше 5.9 дюймов идеально подойдут для комфортного сёрфинга в
                      интернете и просмотра любимых фильмов. На сегодняшний день оптимальным размером даже самого
                      бюджетного смартфона считается экран – от 5.2 до 6.5&nbsp;дюймов.</p>
                    <p>Также не стоит забывать о типе используемого дисплея. На текущий момент стоит выделить следующие
                      виды дисплеев: TFT, OLED, AMOLED и IPS (сюда же можно отнести такие разновидности как, Super
                      AMOLED
                      и Ultra AMOLED). Если вы хотите приобрести смартфон с качественной насыщенной картинкой, то
                      выбирайте OLED, AMOLED, IPS или их производные. TFT технология устарела и не является
                      актуальной.</p>
                    <h3><strong>Особенности корпуса</strong></h3>
                    <p>Корпус гаджета производят из множества материалов. Самым прочным из них считается металл, хоть он
                      и
                      тяжелый, зато меньше всего подвержен механическим повреждениям. Также встречаются флагманы, корпус
                      которых сделан из закаленного стекла, выглядят это поистине дорого и стильно. Более бюджетные
                      модели
                      производятся из пластика, силикона или поликарбоната.</p>
                    <p>Самое главное в подборе корпуса – это степень защиты, особенно при условии использования
                      смартфона
                      в активной жизни. Девайсы с уровнем защиты стандарта IP68 устойчивы к попаданию влаги, пыли и
                      грязи,
                      что в значительной мере повышает шансы «выживания» всех компонентов при любых непредвиденных
                      ситуациях.</p>
                    <h4><strong>5 причин выбрать SteelSmart:</strong></h4>
                    <p>Если Вы ищете, где купить качественные смартфоны по доступной цене в ДНР, тогда Вам однозначно в
                      интернет-магазин «Стилсмарт». Ряд причин, по которым выгоднее всего выбрать нас:</p>
                    <ul>
                      <li>Широкий ассортимент;</li>
                      <li>Доступные цены;</li>
                      <li>Скидки, акции, бонусные системы;</li>
                      <li>Сертифицированная оригинальная продукция;</li>
                      <li>Гарантийное обслуживание на все товары;</li>
                      <li>Фирменные магазины по ДНР: Донецк, Макеевка, Горловка, Енакиево, Снежное.</li>
                    </ul>
                  </div>
                </>
              ) : (
                <p>В данной категории товары отсутствуют</p>
              )}

            </ContentBox>
          </div>
        </div>
      )}
    </>
  )
}

export default Catalog
