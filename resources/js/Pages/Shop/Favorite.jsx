import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const Favorite = () => {
  return (
    <>
      <>
        <Head title="Избранные товары"/>

        <ContentBox title="Избранные товары">
          <p className="mt-16">Список избранных товаров пуст</p>
          <Link href={route('shop')} className="standard-button block w-fit mt-5 text-md py-1.5 px-4">Перейти к покупкам</Link>
        </ContentBox>
      </>
    </>
  )
}

export default Favorite
