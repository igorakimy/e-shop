import DefaultButton from '@/Components/ui/DefaultButton'
import TextInput from '@/Components/ui/TextInput'
import { useEffect, useState } from 'react'
import { useModal } from '@/Components/Context/ModalContext'
import { router } from '@inertiajs/react'

const VerificationForm = () => {

  const time = 120

  const [counter, setCounter] = useState(time)
  const [disabled, setDisabled] = useState(counter > 0)

  const [code, setCode] = useState('')

  const { openModal, closeModal } = useModal()

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter === 0 && setDisabled(false)
  }, [counter])

  const handleConfirmCode = () => {
    router.post('/confirm-code', {
      code: code
    }, {
      onSuccess: page => {
        closeModal()
      },
      onError: errors => {
        console.log(errors)
      }
    })
  }

  const handleResendCode = () => {

    if (counter !== 0) {
      return
    }

    router.post('/resend-code', {}, {
      onSuccess: page => {
        setCounter(time)
        setDisabled(true)
        setCode('')
        openModal('register_verification')
      },
      onError: errors => {
        console.log(errors)
      }
    })
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <TextInput
          className="code !max-w-full"
          name="code"
          placeholder={"Временный код"}
          value={code}
          onChange={setCode}
        />

        <div className="flex mt-5">
          <DefaultButton
            text="Проверить"
            className="mr-5"
            handleClick={handleConfirmCode}
          />
          <DefaultButton
            text={`Повторная отправка ${counter > 0 ? `(${counter})` : ''} `}
            className="mr-5"
            disabled={disabled}
            handleClick={handleResendCode}
          />
        </div>
      </div>
    </>

  )
}

export default VerificationForm


