import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import { route } from 'ziggy-js'

const Cart = () => {
  return (
    <>
      <Head title="Корзина"/>

      <ContentBox title="Корзина">
        <p className="mt-16">Корзина пуста, но Вы всегда можете это исправить</p>
        <Link href={route('shop')} className="standard-button block w-fit mt-5 text-md py-1.5 px-4">
          Перейти к покупкам</Link>
      </ContentBox>
    </>
  )
}

export default Cart
