import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const Suppliers = () => {
  return (
    <>
      <Head title="Поставщикам" />

      <ContentBox title="Поставщикам">
        <p className="mb-2.5">
          Мы ценим ваш интерес к сотрудничеству с нами.
        </p>
        <p className="mb-2.5">
          Мы постоянно ищем новые товары и поставщиков, чтобы предложить нашим
          клиентам самые современные и качественные продукты.
        </p>
        <p className="mb-2.5">
          Если у вас есть интересные предложения или вы хотите продать нам свою
          продукцию, пожалуйста высылайте ваше коммерческое предложение на почту <a href="mailto:zakupka@steelsmart.shop" className="text-orange">zakupka@steelsmart.shop</a>.
        </p>
        <p className="mb-2.5">
          Мы гарантируем честное и прозрачное сотрудничество, а также поддержку на всех этапах работы с нами.
        </p>
        <p className="mb-2.5">
          Мы стремимся к долгосрочным отношениям с нашими поставщиками, поэтому ваш успех - наш приоритет!
        </p>
        <p className="mb-2.5">
          Присоединяйтесь к нашей команде и помогите нам предложить нашим клиентам лучшие товары на рынке.
        </p>
      </ContentBox>
    </>
  )
}

export default Suppliers
