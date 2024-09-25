import ContentBox from '@/Components/ui/ContentBox'
import { Head } from '@inertiajs/react'
import aboutImg from '../../../images/about.png'

const About = () => {
  return (
    <>
      <Head title="O компании" />

      <ContentBox title="O компании" className="mb-5">
        <img src={aboutImg} className="w-full" alt="Информация о магазине"/>
      </ContentBox>

      <ContentBox className="mb-5">
        <div className="max-w-[1024px] mx-auto">
          <p className="mb-5">
            Компания "Steel<span className="text-orange">Smart</span>" основана в 2015 году.
            На сегодняшний день зарекомендовала себя как надежный и профессиональный партнер своих клиентов.
          </p>
          <p className="mb-5">
            <strong>Основные направления работы фирмы:</strong>
          </p>
          <ul className="mb-5 list-disc list-inside">
            <li>розничная сеть магазинов цифровой и бытовой техники;</li>
            <li>сервис и качественная поддержка;</li>
            <li>работа с оптовым и корпоративным сектором.</li>
          </ul>
          <p className="mb-5">
            В магазинах компании предоставлен широкий ассортимент продукции
            ведущих мировых брендов: компьютерной и мобильной техники,
            печатного и копировального оборудования, периферии и
            аксессуаров, электрического и сетевого оборудования,
            телекоммуникационных систем, а также всех необходимых
            комплектующих и расходных материалов.
          </p>
          <p className="mb-5">
            Компания "Steel<span className="text-orange">Smart</span>" — успешный, динамично развивающийся проект на
            рынке
            цифровой и бытовой техники Донецкой Народной Республики.
          </p>
          <h2 className="text-left mb-5 border-t-2 border-orange text-xl pt-5">
            Преимущества:
          </h2>
          <ul className="mb-5 list-disc list-inside">
            <li>Высокое качество продукции;</li>
            <li>Большой ассортимент товаров различных брендов;</li>
            <li>Квалифицированный и опытный персонал;</li>
            <li>Доступные цены;</li>
            <li>Выгодные предложения;</li>
            <li>Устойчивые связи с поставщиками.</li>
          </ul>
          <h2 className="text-xl mb-5">Спектр услуг:</h2>
          <ul className="mb-5 list-disc list-inside">
            <li>Профессиональная консультация специалистов;</li>
            <li>Гарантийное и постгарантийное обслуживание;</li>
            <li>Настройка и ремонт компьютерной и оргтехники;</li>
            <li>Подбор комплектующих, сборка компьютера, установка и настройка программного обеспечения;</li>
            <li>Восстановление и заправка лазерных картриджей.</li>
          </ul>
          <p>Всегда рады сотрудничать с Вами!</p>
        </div>
      </ContentBox>
    </>
  )
}

export default About
