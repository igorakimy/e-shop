import ContentBox from '@/Components/ui/ContentBox'
import { Head, Link } from '@inertiajs/react'

const Sales = () => {
  return (
    <>
      <Head title="Акции" />

      <ContentBox title="Акции">
        <p>В данный момент на сайте нет действующих предложений по Вашему запросу, но Вы можете ознакомиться с другими разделами нашего сайта, или <Link className="text-orange" href="/">перейти к покупкам</Link></p>
      </ContentBox>
    </>
  )
}

export default Sales
