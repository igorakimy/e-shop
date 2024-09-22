import ContentBox from '@/Components/ui/ContentBox'
import { Head, router, usePage } from '@inertiajs/react'
import TextInput from '@/Components/ui/TextInput'
import SelectInput from '@/Components/ui/SelectInput'
import TextareaInput from '@/Components/ui/TextareaInput'
import DefaultButton from '@/Components/ui/DefaultButton'
import { useEffect, useState } from 'react'
import { useModal } from '@/Components/Context/ModalContext'

const TechSupport = () => {

  const { currentUser } = usePage().props

  const { openModal } = useModal()

  const [login, setLogin] = useState('')
  const [subject, setSubject] = useState('0')
  const [message, setMessage] = useState('')

  const [subjectValues, setSubjectValues] = useState([])

  useEffect(() => {
    if (currentUser) {
      setLogin(currentUser.email)
      setSubjectValues([
        {value: '0', label: 'Выберите заголовок сообщения'},
        {value: 'Не обновляется баланс бонусов после покупки', label: 'Не обновляется баланс бонусов после покупки'},
        {value: 'Проблемы с Картой клиента', label: 'Проблемы с Картой клиента'},
        {value: 'Другой вопрос', label: 'Другой вопрос'},
      ])
    } else {
      setSubjectValues([
        {value: '0', label: 'Выберите заголовок сообщения'},
        {value: 'Не могу войти в аккаунт', label: 'Не могу войти в аккаунт'},
        {value: 'Не могу зарегистрироваться', label: 'Не могу зарегистрироваться'},
      ])
    }
  }, [login])

  const handleRequest = () => {
    router.post('/tech-support', {
      login: login,
      subject: subject,
      message: message,
    }, {
      onSuccess: page => {
        openModal(
          'Заявка успешно создана',
          'В ближайшее время команда технической поддержки свяжется с вами.',
          false
        )
      },
      onError: errors => {
        console.log(errors)
      }
    })
  }

  return (
    <>
      <Head title="Тех. поддержка" />

      <ContentBox>
        <h1 className="text-xl font-semibold mb-10">Форма технической поддержки</h1>

        <div className="text-sm mb-[15px]">

          {currentUser ? (
            <TextInput
              id="login_email"
              className="!hidden"
              value={login}
            />
          ) : (
            <div className="mb-5">
              <label htmlFor="login_email" className="text-[#797979]">Логин / Email используемый при создании
                аккаунта</label>
              <TextInput
                id="login_email"
                placeholder="Введите Логин или Email"
                className="mt-[5px] max-w-full"
                value={login}
                onChange={setLogin}
              />
            </div>
          )}

          <div className="mb-5">
            <label htmlFor="login_email" className="text-[#797979]">Заголовок сообщения</label>
            <SelectInput
              name="subject"
              className="mt-[5px] max-w-full"
              values={subjectValues}
              onChange={setSubject}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="text-[#797979]">Сообщение </label>
            <TextareaInput
              id="message"
              placeholder="Опишите проблему"
              className="mt-[5px] max-w-full h-[150px]"
              value={message}
              onChange={setMessage}
            />
          </div>

          <DefaultButton
            text="Создать заявку"
            handleClick={handleRequest}
          />
        </div>
      </ContentBox>
    </>
  )
}

export default TechSupport
