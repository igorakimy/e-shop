import DefaultButton from '@/Components/ui/DefaultButton'
import TextInput from '@/Components/ui/TextInput'
import { useEffect, useState } from 'react'
import { useModal } from '@/Components/Context/ModalContext'

const VerificationForm = () => {

  const time = 120

  const [counter, setCounter] = useState(time)
  const [disabled, setDisabled] = useState(counter > 0)

  const { openModal } = useModal()

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter === 0 && setDisabled(false)
  }, [counter])

  return (
    <>
      <div className="flex flex-col w-full">
        <form
          action=""
        >
          <TextInput
            className="code !max-w-full"
            name="code"
            placeholder={"Временный код"}
          />
        </form>

        <div className="flex mt-5">
          <DefaultButton text="Проверить" className="mr-5"/>
          <DefaultButton
            text={`Повторная отправка ${counter > 0 ? `(${counter})` : ''} `}
            className="mr-5"
            disabled={disabled}
            handleClick={() => {
              setCounter(time)
              setDisabled(true)
              openModal('register_verification')
            }}
          />
        </div>
      </div>
    </>

  )
}

export default VerificationForm


