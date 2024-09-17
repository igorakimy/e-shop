import ModalDialog from '@/Components/ModalDialog'
import { Link, router } from '@inertiajs/react'
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
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const switchCurrentLoginType = (type) => {
    setCurrentLoginType(type)
    if (type === 'phone') {
      setEmail('')
    } else {
      setPhone('')
    }
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

  const handleLogin = () => {
    router.post('/sign-in', {
      type: currentLoginType,
      email: email,
      phone: phone,
    }, {
      onSuccess: page => {
        closeModal()
        openModal('register_verification')
      },
      onError: errors => {
        console.log(errors)
      },
    })
  }

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
              onChange={switchCurrentLoginType}
            />
            <EmailInput
              className={`${currentLoginType === 'phone' && 'hidden'}`}
              name="email"
              placeholder={"Email"}
              value={email}
              onChange={setEmail}
            />
            <PhoneInput
              className={currentLoginType !== 'phone' && 'hidden'}
              name="phone"
              placeholder={"Телефон"}
              value={phone}
              onChange={setPhone}
            />
          </form>
        </div>
        <div className="flex flex-col">
          <Link
            href={route('registration')}
            className="mt-2.5 font-semibold"
            onClick={closeModal}>
            Регистрация
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <DefaultButton
          text="Войти"
          className="mr-5"
          handleClick={handleLogin}
        />
      </div>
    </>

  )
}

export default LoginForm


