import { Head, Link } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'
import { route } from 'ziggy-js'

const Compare = () => {
  return (
    <>
      <Head title="Сравнение товаров"/>

      <ContentBox title="Сравнение товаров">
        <p className="mt-16">Список сравнения товаров пуст</p>
        <Link href={route('shop')} className="standard-button block w-fit mt-5 text-md py-1.5 px-4">Перейти к покупкам</Link>
      </ContentBox>
    </>
  )
}

export default Compare
