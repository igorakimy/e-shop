import ContentBox from '@/Components/ui/ContentBox'
import { Head, Link } from '@inertiajs/react'
import IconArrowRight from '@/Components/Icons/IconArrowRight'

const Work = () => {

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
      <Head title="Работа в SteelSmart"/>

      <ContentBox title="Работа в SteelSmart" className="mb-5">
        <div className="flex flex-col items-start justify-start text-base">
          <h2 className="mb-5 text-xl font-semibold text-orange uppercase">
            Добро пожаловать в нашу команду!
          </h2>

          <p className="mb-2.5">
            Компания "SteelSmart" — лидер на рынке цифровой и бытовой техники
            Донецкой Народной Республики. Мы ищем ответственных и инициативных
            людей, готовых показывать результат. Если ты любишь все, что связано
            с компьютерами, гаджетами и цифровой техникой, нравится общаться с
            людьми – мы ждем тебя в свои ряды!
          </p>

          <p className="mb-10">
            Мы активно развиваемся и даем возможность развиваться вам.
          </p>

          <h3 className="flex justify-start items-center mb-5">
            <span className="text-xl font-semibold text-orange uppercase">
              Сейчас нам нужны
            </span>
          </h3>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Руководитель интернет-магазина</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                Компания "SteelSmart" лидер на рынке цифровой и бытовой техники.
                В связи с расширением, открыта вакансия <span
                className="text-orange">руководителя интернет-магазина</span>.
              </p>
              <p>&nbsp;</p>
              <h4 className="mb-5 text-lg font-semibold underline">
                ТРЕБОВАНИЯ:
              </h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Опыт управления интернет-магазином от 1 года;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа с базой 1С;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Уверенный пользователь MS Office;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Развитые коммуникативные и аналитические навыки;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Навыки работы с контентом и понимание основных маркетинговых метрик;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Опыт работы с большим объемом данных;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Умение оценивать эффективность собственных решений;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Понимание принципов командной работы, умение выстраивать собственную
                команду.</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">
                УСЛОВИЯ РАБОТЫ:
              </h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа в стабильной компании;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Оформление по ТК РФ;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Конкурентный уровень заработной платы (обсуждается индивидуально с
                кандидатом);</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - График работы понедельник-пятница с 9:00 до 18:00;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Ежегодный оплачиваемый отпуск;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Дружный коллектив;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Комфортный и современный офис.</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">
                ОБЯЗАННОСТИ:
              </h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Контроль работы интернет-магазина;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Управление менеджерами по продажам и CEO-специалистами;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа с карточками товара в 1С;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Управление и оптимизация логистических процессов;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа с контентом, продвижение интернет-ресурсов;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Руководство и развитие направлений: трафик (SEO, перформанс каналы, digital,
                programmatic, ремаркетинг, СРА, контекст/директ), CRM (email, push, привлечение и ротация клиентов), СММ
                (соцсети, таргет), SERM (управление репутацией);</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Взаимодействие с IT разработкой;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Постановка и контроль задач по улучшению пользовательского опыта на сайте
                (CJM), увеличению конверсии в заказы, новые интеграции с SAAS сервисами;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Отчетность по показателям (трафик, заказы, отгрузки, новый функционал и
                контент на сайте).</p>

              <p className="mt-5 pl-[5px]">
                Мы ищем ответственного и квалифицированного сотрудника! Если Вы опытны, ответственны и нацелены на
                долгосрочную перспективу сотрудничества - ждем Вас в нашей дружной команде!
              </p>

              <p className="mt-5 pl-[5px]">
                Узнать более подробную информацию можно по телефону: <span
                className="text-orange">+7 949 306 11 55</span>
              </p>

              <p className="mt-5 pl-[5px]">
                Резюме отправляйте на эл. адрес: <a
                href="mailto:rabota@steelsmart.shop?subject=Резюме SteelSmart.shop"
                className="text-orange"
              >rabota@steelsmart.shop</a>
              </p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Юрист (Донецк)</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                В связи с расширением штата, SteelSmart приглашает на работу юриста.
              </p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Сервисный инженер (Донецк)</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                В связи с расширением штата, сервисный центр SteelSmart приглашает на работу
                инженера сервисного центра. Вот уже 6 лет мы успешно занимаемся ремонтом ноутбуков,
                компьютерных комплектующих, мобильных телефонов, планшетов и прочих товаров.
                Если у Вас есть опыт работы по данной специальности, Вы ответственны и ищете
                серьезную развивающуюся компанию для долгосрочной перспективы – мы готовы
                предложить Вам сотрудничество!
              </p>
              <p>&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">ТРЕБОВАНИЯ:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - молодой человек возрастом от 25 лет;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - опыт в сервисном центре обязателен (не менее 2 лет);</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - честность, пунктуальность, чистоплотность.</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">УСЛОВИЯ РАБОТЫ:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - 5-дневная рабочая неделя с 9.00 до 19.00;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - комфортные условия труда;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - удобное расположение (СЦ находиться в центре города).</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">ОБЯЗАННОСТИ:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Диагностика, модульный и компонентный ремонт и техническое обслуживание
                цифровой техники: смартфонов, планшетов, ноутбуков, ПК и другой периферийной техники;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа с базой 1С: ведение заказов, контроль отчетов по заказам;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Работа с программным обеспечением: восстановление данных, прошивка,
                настройка, разблокировка;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Коммуникация с клиентами при надобности (уведомление клиентов по статусу
                ремонта, консультации по ремонту);</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Составление документов о техническом осмотре;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Подготовка документов по оплате завершенных ремонтов;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - Заказ необходимых запчастей, составление документов по закупке товара;</p>

              <p className="mt-5 pl-[5px]">
                От Вас требуется: вежливое общение с клиентом, своевременное уведомление его о
                статусе ремонта, правильное ведение электронной базы, качественное выполнение ремонтов,
                пунктуальность, организованность.
              </p>

              <p className="mt-5 pl-[5px]">
                Мы ищем ответственного и квалифицированного сотрудника! Если Вы опытны,
                ответственны и нацелены на долгосрочную перспективу сотрудничества -
                ждем Вас в нашей дружной команде!
              </p>

              <p className="mt-5 pl-[5px]">
                Резюме отправляйте на эл. адрес: <a
                href="mailto:surinov@steelsmart.shop?subject=Резюме SteelSmart.shop"
                className="text-orange"
              >surinov@steelsmart.shop</a>
              </p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Веб-Программист (Донецк)</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                Компания "Steelsmart" — успешный, динамично развивающийся проект
                на рынке компьютерной техники, в связи с расширением, открывает вакансию.
              </p>
              <p>&nbsp;</p>
              <h4 className="mb-5 text-lg font-semibold underline">Функциональные обязанности:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - разработка серверной части на фреймворке Laravel;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - разработка клиентской части, используя технологии: HTML, CSS,
                JavaScript;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - рефакторинг и кастомизация существующего функционала сайта.</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">Требования к кандидату:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - HTML5 (валидная вёрстка), CSS3, кроссбраузерность;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - адаптивная вёрстка;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - JavaScript (ES6+);</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - PHP 8.0+, а также опыт работы с СУБД MySQL;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - навыки работы с системой контроля версий Git;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - опыт разработки на Laravel.</p>
              <p>&nbsp;&nbsp;&nbsp;</p>

              <h4 className="mb-5 text-lg font-semibold underline">Требования к кандидату:</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - график - 5/2;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - официальное трудоустройство;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - оплата по результатам собеседования;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp; - возможность карьерного роста.</p>

              <p className="mt-5 pl-[5px]">
                Резюме отправляйте на эл. адрес: <a
                href="mailto:litvinov@steelsmart.shop?subject=Резюме SteelSmart.shop"
                className="text-orange">litvinov@steelsmart.shop</a>
              </p>

              <p className="mt-5 pl-[5px]">Тема письма: Веб-Программист</p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
          <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Продавец-консультант</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <h4 className="mb-5 text-lg font-semibold underline">Основные обязанности:</h4>
              <ul className="mb-5">
                <li className="mb-[5px]">
                  - Консультирование покупателей по вопросам ассортимента, наличия и количества товара;
                </li>
                <li className="mb-[5px]">
                  - Заполнение сопутствующей документации;
                </li>
                <li className="mb-[5px]">
                  - Прием и выкладка товара в торговом зале, на витринах;
                </li>
                <li className="mb-[5px]">
                  - Поддержание чистоты в торговом зале;
                </li>
                <li className="mb-[5px]">
                  - Выполнение плана продаж;
                </li>
                <li className="mb-[5px]">
                  - Выдача товара клиентам;
                </li>
                <li className="mb-[5px]">
                  - Контроль за качественным и количественным наполнением витрин;
                </li>
                <li className="mb-[5px]">
                  - Активное участие в жизнедеятельности магазина;
                </li>
                <li className="mb-[5px]">
                  - Грамотная речь, коммуникативные навыки, активность;
                </li>
                <li className="mb-[5px]">
                  - Участие в инвентаризации магазина.
                </li>
              </ul>
              <h4 className="mb-5 text-lg font-semibold underline">Требования:</h4>
              <ul className="mb-5">
                <li className="mb-[5px]">
                  <span className="font-semibold">Образование</span> - Желательно высшее
                </li>
                <li className="mb-[5px]">
                  <span className="font-semibold">Занятость</span> - Полная занятость
                </li>
                <li className="mb-[5px]">
                  <span className="font-semibold">Опыт работы</span> - Желателен, в похожей сфере, знание компьютерной и
                  цифровой техники
                </li>
              </ul>
              <h4 className="mb-5 text-lg font-semibold underline">Мы предлагаем:</h4>
              <ul>
                <li className="mb-[5px]">
                  - Стабильную работу в крупной и развивающейся компании;
                </li>
                <li className="mb-[5px]">
                  - Официальное трудоустройство;
                </li>
                <li className="mb-[5px]">
                  - Корпоративное обучение;
                </li>
                <li className="mb-[5px]">
                  - График работы – плавающий;
                </li>
                <li className="mb-[5px]">
                  - Возможность карьерного роста и развитие профессиональных навыков.
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Бухгалтер (Донецк)</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                В связи с расширением штата, SteelSmart приглашает на работу бухгалтеров.
              </p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Кладовщики (Донецк)</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                В связи с расширением штата, SteelSmart приглашает на работу кладовщиков.
              </p>
            </div>
          </div>

          <div
            className="flex justify-start items-center text-black hover:underline cursor-pointer pl-[5px] mb-2.5 select-none"
            onClick={toggleHiddenClass}
          >
            <IconArrowRight height="15px" className="mr-2.5"/>
            <span>Экспедиторы</span>
          </div>
          <div className="hidden collapse-content pt-5 pl-[5px] mb-5">
            <div className="p-5 rounded-lg border-2 border-orange">
              <p>
                В связи с расширением штата, SteelSmart приглашает на работу экспедиторов.
              </p>
            </div>
          </div>

          <p className="mt-5 pl-[5px]">
            Контактный номер телефона для связи: <span className="text-orange">+7 949 306 11 55</span>
          </p>

          <p className="mt-5 pl-[5px]">
            Резюме отправляйте на эл. адрес: <a
            href="mailto:rabota@steelsmart.shop?subject=Резюме SteelSmart.shop"
            className="text-orange"
          >rabota@steelsmart.shop</a>
          </p>
        </div>
      </ContentBox>
    </>
  )
}

export default Work
