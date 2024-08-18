import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const Orders = () => {
  return (
    <>
      <Head title="Заказы"/>

      <ContentBox>
        <div className="tabs flex">
          <div className="py-2.5 px-5 text-orange bg-gray-300 cursor-pointer">
            Заказы
          </div>
        </div>
      </ContentBox>
    </>
  )
}

export default Orders
