import ContentBox from '@/Components/ui/ContentBox'
import { Head, Link } from '@inertiajs/react'
import TextInput from '@/Components/ui/TextInput'
import EmailInput from '@/Components/ui/EmailInput'
import PhoneInput from '@/Components/ui/PhoneInput'
import { route } from 'ziggy-js'
import { useState } from 'react'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useModal } from '@/Components/Context/ModalContext'

const Registration = () => {

  const [checked, setChecked] = useState(false)

  const { openModal } = useModal()

  const signUp = (e) => {
    e.preventDefault()
    openModal('register_verification')
  }

  return (
    <>
      <Head title="Регистрация"/>

      <ContentBox title="Регистрация">
        <div className="px-0 md:pt-5 mt-10 relative">
          <form id="registration" action="">
            <div className="flex justify-center items-center mb-[15px]">
              <span className="w-[89px] mr-2.5 text-sm leading-none">
                Имя на сайте
                <span className="required text-orange">*</span>
              </span>
              <TextInput name="nickname" />
            </div>
            <div className="flex justify-center items-center mb-[15px]">
              <span className="w-[89px] mr-2.5 text-sm leading-none">
                ФИО
              </span>
              <TextInput name="full_name" />
            </div>
            <div className="flex justify-center items-center mb-[15px]">
              <span className="w-[89px] mr-2.5 text-sm leading-none">
                E-mail
                <span className="required text-orange">*</span>
              </span>
              <EmailInput name="email" />
            </div>
            <div className="flex justify-center items-center mb-[15px]">
              <span className="w-[89px] mr-2.5 text-sm leading-none">
                Телефон
                <span className="required text-orange">*</span>
              </span>
              <PhoneInput name="phone" />
            </div>
            <div className="new-labels flex flex-col items-center mt-[40px] mb-5">
              <p className="max-w-[700px]">
                <input type="checkbox" name="policy" id="policy-checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
                <label htmlFor="policy-checkbox" className="select-none">
                  Соглашаюсь с <Link className="text-orange" target="_blank" href={route('privacy_policy')}>политикой конфиденциальности</Link>, <Link className="text-orange" target="_blank" href={route('privacy_policy')}>пользовательским соглашением</Link>,
                  а также даю согласие на отправку технических и рекламных сообщений.
                </label>
              </p>
            </div>
            <div className=" justify-center items-center mt-5 mb-[15px]">
              <DefaultButton
                text="Зарегистрироваться на сайте"
                handleClick={(e) => signUp(e)}
                disabled={!checked}
              />
            </div>
          </form>
        </div>
      </ContentBox>
    </>
  )
}

export default Registration
