import ModalDialog from '@/Components/ModalDialog'
import { Link } from '@inertiajs/react'
import DefaultButton from '@/Components/ui/DefaultButton'
import EmailInput from '@/Components/ui/EmailInput'
import PhoneInput from '@/Components/ui/PhoneInput'
import SelectInput from '@/Components/ui/SelectInput'
import { useState } from 'react'
import { route } from 'ziggy-js'
import { useModal } from '@/Components/Context/ModalContext'

const LoginForm = ({closeModal}) => {

  const { openModal } = useModal()

  const [currentLoginType, setCurrentLoginType] = useState('phone')

  const switchCurrentLoginType = (type) => {
    setCurrentLoginType(type)
  }

  const loginTypes = [
    {
      "value": "phone",
      "selected": true,
      "label": "Войти по телефону",
    },
    {
      "value": "email",
      "selected": false,
      "label": "Войти по email",
    },
  ]

  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <div className="flex flex-col email-login mr-5 pr-5 border-r border-[#ccc]">
          <form
            id="login-form"
            className="max-w-[275px]"
            action=""
          >
            <SelectInput
              className="mb-2"
              name="type"
              values={loginTypes}
              handleOnChange={switchCurrentLoginType}
            />
            <EmailInput
              className={`${currentLoginType === 'phone' && 'hidden'}`}
              name="email"
              placeholder={"Email"}
            />
            <PhoneInput
              className={currentLoginType !== 'phone' && 'hidden'}
              name="phone"
              placeholder={"Телефон"}
            />
          </form>
        </div>
        <div className="flex flex-col">
          <Link href={route('registration')} className="mt-2.5 font-semibold" onClick={closeModal}>Регистрация</Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <DefaultButton
          text="Войти"
          className="mr-5"
          handleClick={() => openModal('register_verification')}
        />
      </div>
    </>

  )
}

export default LoginForm


