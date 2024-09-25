import { Head } from '@inertiajs/react'
import ContentBox from '@/Components/ui/ContentBox'

const LegalInfo = () => {
  return (
    <>
      <Head title="Юридическая информация" />

      <ContentBox title="Юридическая информация">
        <p>
          Информация об Администрации Сайта:
        </p>
        <p>
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ИТКОМ"
        </p>
        <p>
          Адрес: 283001, Донецкая Народная Республика, г.о. Донецкий, г. Донецк, пр-кт Ильича, д. 44
        </p>
        <p>
          ИНН: 9303016743 , ОГРН: 1229300103812
        </p>
        <p>
          e-mail: office@steelsmart.shop
        </p>
      </ContentBox>
    </>
  )
}

export default LegalInfo
