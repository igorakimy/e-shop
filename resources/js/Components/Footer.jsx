import { Link } from '@inertiajs/react'
import qrCodeImg from '../../images/qr-code-vk.svg'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white text-lg">
        <div className="max-width footer-content flex flex-col items-center md:items-start justify-items-center md:flex-row md:justify-between w-full pb-4">
          <div className="flex flex-col text-center md:text-left md:items-baseline md:flex-row justify-items-center pt-8 xl:pt-[67px] md:pl-12 md:ml-0 max-w-[865px] w-full">
            <div className="flex flex-col footer-col">
              <h1 className="text-orange">Информация</h1>
              <Link className="footer-link" href="/">Акции</Link>
              <Link className="footer-link" href="/">Магазины</Link>
              <Link className="footer-link" href="/">Работа в SteelSmart</Link>
            </div>

            <div className="flex flex-col footer-col">
              <h1 className="text-orange">Клиентам</h1>
              <Link className="footer-link" href="/">Организациям и ФЛП</Link>
              <Link className="footer-link" href="/">Партнёрам</Link>
              <Link className="footer-link" href="/">Поставщикам</Link>
              <Link className="footer-link" href="/">Доставка и оплата</Link>
              <Link className="footer-link" href="/">О компании</Link>
              <Link className="footer-link" href="/">Юридическая информация</Link>
            </div>

            <div className="flex flex-col footer-col md:!mr-0">
              <h1 className="text-orange">Сервис и услуги</h1>
              <Link className="footer-link" href="/">Сервис центр</Link>
              <Link className="footer-link" href="/">Услуги по видеонаблюдению</Link>
            </div>
          </div>

          <div className="flex flex-col items-center max-w-[369px] w-full pt-8">
            <p className="flex flex-row justify-center text-sm mb-3.5">
              Интернет-магазин:
              <span className="text-orange mx-2.5">+7949 30-9999-0</span>
            </p>
            <img className="flex" src={qrCodeImg} alt="QR-code VKontakte" style={{width: "146px", height: "146px"}}/>
            <p className="flex flex-row justify-center text-sm mt-3.5">
              Для организаций:
              <span className="text-orange mx-2.5">+7949 500-03-05</span>
            </p>
          </div>
        </div>

        <div className="max-width flex justify-center items-center align-middle copyright mt-[15px] h-10 text-sm border-solid border-t-[1px] border-t-white px-0">
          © 2015-2024. Powered by Igor Akimov
        </div>
      </footer>
    </>
  )
}

export default Footer
