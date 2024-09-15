import TextInput from '@/Components/ui/TextInput'
import DefaultButton from '@/Components/ui/DefaultButton'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { route } from 'ziggy-js'
import galleryImg from '../../../images/products/gallery_img.jpeg'
import PhoneInput from '@/Components/ui/PhoneInput'
import SelectInput from '@/Components/ui/SelectInput'
import DateInput from '@/Components/ui/DateInput'

const Profile = () => {

  const [activeTab, setActiveTab] = useState(1)

  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [birthdayDate, setBirthdayDate] = useState('')
  const [source, setSource] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [vkontakteId, setVkontakteId] = useState('')
  const [instagramId, setInstagramId] = useState('')
  const [smsMailing, setSmsMailing] = useState(false)
  const [emailMailing, setEmailMailing] = useState(false)

  const [showOtherCityInput, setShowOtherCityInput] = useState(false)

  const toggleTab = (index) => {
    setActiveTab(index)
  }

  const getActiveTabClass = (index, className) => {
    return activeTab === index ? className : ''
  }

  const getSectionClass = (index) => {
    return activeTab === index ? 'block' : 'hidden'
  }

  const saveProfile = () => {
    console.log(fullName, phoneNumber, city, birthdayDate, source, cardNumber)
  }

  const toggleOtherCityInput = (value) => {
    setShowOtherCityInput(value === '-1')
  }

  const saveInfo = () => {
    console.log(smsMailing, emailMailing)
  }

  return (
    <div className="flex flex-col my-5 bg-white">
      <div className="p-5">
        <div className="tabs flex flex-wrap w-full">
          <input className="hidden absolute" id="tab1" type="radio" name="tabs" onChange={() => toggleTab(1)}/>
          <label htmlFor="tab1" className={`${getActiveTabClass(1, 'active')} cursor-pointer select-none`}>Личная информация</label>
          <input className="hidden absolute" id="tab2" type="radio" name="tabs" onChange={() => toggleTab(2)}/>
          <label htmlFor="tab2" className={`${getActiveTabClass(2, 'active')} cursor-pointer select-none`}>Заказы</label>
          <input className="hidden absolute" id="tab3" type="radio" name="tabs" onChange={() => toggleTab(3)}/>
          <label htmlFor="tab3" className={`${getActiveTabClass(3, 'active')} cursor-pointer select-none`}>Карта клиента</label>

          <section className={`${getSectionClass(1)} w-full p-[15px] bg-white border border-[#ddd]`} id="content-tab1">
            <div>
              <div className="tab-pane flex flex-col items-start mt-5">
                <h3 className="font-semibold text-xl mb-5">Данные пользователя</h3>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="email" className="whitespace-nowrap mr-2.5 min-w-[120px]">Email</label>
                  <TextInput
                    className="max-w-full"
                    name="email"
                    id="email"
                    value="igorakimy@gmail.com"
                    disabled
                  />
                </div>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="phone" className="whitespace-nowrap mr-2.5 min-w-[120px]">Телефон</label>
                  <TextInput
                    className="max-w-full"
                    name="phone"
                    id="phone"
                    value="79494795562"
                    disabled
                  />
                </div>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="nickname" className="whitespace-nowrap mr-2.5 min-w-[120px]">Имя на сайте</label>
                  <TextInput
                    className="max-w-full"
                    name="nickname"
                    id="nickname"
                    value={nickname}
                    onChange={setNickname}
                  />
                </div>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="full_name" className="whitespace-nowrap mr-2.5 min-w-[120px]">ФИО</label>
                  <TextInput
                    className="max-w-full"
                    name="full_name"
                    id="full_name"
                    value={fullName}
                    onChange={setFullName}
                  />
                </div>

                <h3 className="font-semibold text-xl mb-5 mt-10">Социальные сети</h3>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="vkontakte_id" className="whitespace-nowrap mr-2.5 min-w-[120px]">Ник ВКонтакте</label>
                  <TextInput
                    className="max-w-full"
                    name="vkontakte_id"
                    id="vkontakte_id"
                    value={vkontakteId}
                    onChange={setVkontakteId}
                  />
                </div>
                <div className="w-full flex items-center mb-2.5 max-w-[700px]">
                  <label htmlFor="instagram_id" className="whitespace-nowrap mr-2.5 min-w-[120px]">Ник Instagram</label>
                  <TextInput
                    className="max-w-full"
                    name="instagram_id"
                    id="instagram_id"
                    value={instagramId}
                    onChange={setInstagramId}
                  />
                </div>

                <h3 className="font-semibold text-xl mb-5 mt-10">Управление подписками</h3>
                <div className="new-labels flex flex-col items-center mb-2.5">
                  <p className="select-none">
                    <input
                      type="checkbox"
                      name="adv_sms_mailing"
                      id="adv_sms_mailing"
                      checked={smsMailing}
                      onChange={(e) => setSmsMailing(e.target.checked)}
                    />
                    <label htmlFor="adv_sms_mailing">Рекламная СМС рассылка</label>
                  </p>
                </div>
                <div className="new-labels flex flex-col items-center mb-5">
                  <p className="select-none">
                    <input
                      type="checkbox"
                      name="email_mailing"
                      id="email_mailing"
                      checked={emailMailing}
                      onChange={(e) => setEmailMailing(e.target.checked)}
                    />
                    <label htmlFor="email_mailing">Email рассылка</label>
                  </p>
                </div>
                <DefaultButton text="Сохранить" className="mb-10" handleClick={saveInfo} />

                <div className="w-full">
                  <p className="mb-5 max-w-[700px]">
                    Соглашаюсь с <Link href={'/'} className="text-orange" target="_blank">политикой конфиденциальности</Link>, <Link href={'/'} className="text-orange" target="_blank">пользовательским соглашением</Link>,
                    а так же даю согласие на отправку технических и рекламных сообщений.
                    Подтверждено от <span className="text-orange font-semibold">29.08.2024 19:05</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${getSectionClass(2)} w-full p-[15px] bg-white border border-[#ddd]`} id="content-tab2">
            <div>
              <div className="flex flex-col">
                <div className="table-header flex h-10 border rounded-t border-[#ddd] bg-[#eee]">
                  <div className="w-full pl-5 flex shrink-[2] items-center">№ Заказа</div>
                  <div className="w-full pl-5 flex shrink-[3] items-center">Сумма, руб</div>
                  <div className="w-full pl-5 flex shrink-[3] items-center">Статус</div>
                  <div className="w-full pl-5 flex shrink-[3] items-center">Способ оплаты</div>
                </div>
                <div className="table-content flex flex-col overflow-x-auto overflow-y-hidden">
                  <div className="flex">
                    <div className="w-full shrink-[2] border-r border-[#eee]">
                      <div className="flex h-[32px] mt-[15px] pl-5 font-semibold text-2xl border-b border-[#eee] whitespace-nowrap"><h2>26470 от 20.08.2022</h2></div>
                      <div className="flex h-[51px] mt-[15px] pl-5 border-b border-[#eee]">
                        <Link className="flex items-center justify-start flex-shrink-0 mr-[15px]" href={'/'} target="_blank">
                          <img src={galleryImg} alt=""/>
                        </Link>
                        <Link className="flex hover:underline overflow-ellipsis overflow-hidden" href={'/'} target="_blank">
                          Мышь USB Defender Witcher GM-990 RGB (52990); 7 кнопок; 3200 dpi; черный/RGB-подсветка
                        </Link>
                      </div>
                      <div className="flex h-[51px] mt-[15px] pl-5 border-b border-[#eee]">
                        <Link className="flex items-center justify-start flex-shrink-0 mr-[15px]" href={'/'}
                              target="_blank">
                          <img src={galleryImg} alt=""/>
                        </Link>
                        <Link className="flex hover:underline overflow-ellipsis overflow-hidden" href={'/'} target="_blank">
                          Мышь USB Defender Witcher GM-990 RGB (52990); 7 кнопок; 3200 dpi; черный/RGB-подсветка
                        </Link>
                      </div>
                      <div className="flex h-[51px] mt-[15px] pl-5 border-b border-[#eee]">
                        <Link className="flex items-center justify-start flex-shrink-0 mr-[15px]" href={'/'}
                              target="_blank">
                          <img src={galleryImg} alt=""/>
                        </Link>
                        <Link className="flex hover:underline overflow-ellipsis overflow-hidden" href={'/'} target="_blank">
                          Мышь USB Defender Witcher GM-990 RGB (52990); 7 кнопок; 3200 dpi; черный/RGB-подсветка
                        </Link>
                      </div>
                      <div className="flex h-[51px] mt-[15px] pl-5 border-b border-[#eee]">
                        <Link className="flex items-center justify-start flex-shrink-0 mr-[15px]" href={'/'}
                              target="_blank">
                          <img src={galleryImg} alt=""/>
                        </Link>
                        <Link className="flex hover:underline overflow-ellipsis overflow-hidden" href={'/'} target="_blank">
                          Мышь USB Defender Witcher GM-990 RGB (52990); 7 кнопок; 3200 dpi; черный/RGB-подсветка
                        </Link>
                      </div>
                    </div>
                    <div className="w-full shrink-[3] border-r border-[#eee]">
                      <div className="flex mt-[15px] pl-5 font-semibold h-[32px] items-center border-b border-[#eee]">Итого: 4660</div>
                      <div className="flex mt-[15px] pl-5 h-[51px] items-center border-b border-[#eee]">650 × 1 = 650</div>
                      <div className="flex mt-[15px] pl-5 h-[51px] items-center border-b border-[#eee]">330 × 1 = 330</div>
                      <div className="flex mt-[15px] pl-5 h-[51px] items-center border-b border-[#eee]">1390 × 1 = 1390</div>
                      <div className="flex mt-[15px] pl-5 h-[51px] items-center border-b border-[#eee]" >2290 × 1 = 2290</div>
                    </div>
                    <div className="w-full shrink-[3] border-r border-[#eee] border-b">
                      <div className="flex mt-[15px] pl-5 font-semibold h-[32px]">Готов с 08.09.2022</div>
                    </div>
                    <div className="w-full shrink-[3] border-b border-[#eee]">
                      <div className="flex mt-[15px] pl-5 font-semibold h-[32px]">Наличные</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`${getSectionClass(3)} w-full p-[15px] bg-white border border-[#ddd]`} id="content-tab3">
            <div>
              <p className="mb-10 font-semibold">
                Внимание! С условиями "Карты клиента" Вы можете ознакомиться <Link className="text-orange" href={route('client_card')}>по ссылке</Link>
              </p>

              <div className="hidden">
                <p className="mb-2 5">
                  Текущее количество бонусов: <span className="text-orange text-2xl font-semibold">0 ₽</span>
                </p>
                <p className="mb-10">
                  Дата последнего обновления: <span className="font-semibold">11.09.2024 19:29</span>
                </p>
                <p className="mb-5">
                  К вашему аккаунту привязана "Карта клиента": <span
                  className="text-orange font-semibold">12345678912345</span>
                </p>
                <DefaultButton text="Показать штрих-код"/>
              </div>

              <div className="text-sm">
                <p className="mb-5 text-xl">
                  Для активации "Карты клиента" Вам необходимо заполнить все поля анкеты
                </p>
                <div>
                  <div className="mb-5">
                    <label htmlFor="card_full_name" className="text-[#797979]">ФИО</label>
                    <TextInput
                      id="card_full_name"
                      name="full_name"
                      className="mt-[5px] max-w-full"
                      placeholder="Введите Ваше ФИО либо просто имя"
                      value={fullName}
                      onChange={setFullName}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone_number" className="text-[#797979]">Номер телефона</label>
                    <PhoneInput
                      name="phone_number"
                      className="mt-[5px] max-w-full"
                      placeholder="Номер телефона"
                      maskChar="_"
                      alwaysShowMask={false}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="city" className="text-[#797979]">Город</label>
                    <SelectInput
                      name="city"
                      className="mt-[5px] max-w-full"
                      values={[
                        {value: "0", label: "Выберите город в котором проживаете"},
                        {value: "Донецк", label: "Донецк"},
                        {value: "Макеевка", label: "Макеевка"},
                        {value: "Горловка", label: "Горловка"},
                        {value: "Енакиево", label: "Енакиево"},
                        {value: "Снежное", label: "Снежное"},
                        {value: "-1", label: "Другой"},
                      ]}
                      onChange={(value) => {
                        setCity(value)
                        toggleOtherCityInput(value)
                      }}
                    />
                    <TextInput
                      className={`${showOtherCityInput ? 'block' : 'hidden'} mt-[5px] max-w-full`}
                      placeholder="Напишите Ваш город"
                      onChange={setCity}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="birthday_date" className="text-[#797979]">Дата рождения</label>
                    <DateInput
                      className="mt-[5px] max-w-full"
                      name="birthday_date"
                      placeholder="Дата рождения"
                      alwaysShowMask={false}
                      value={birthdayDate}
                      onChange={setBirthdayDate}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="source" className="text-[#797979]">Из какого источника Вы о нас узнали?</label>
                    <SelectInput
                      name="source"
                      className="mt-[5px] max-w-full"
                      values={[
                        {value: "0", label: "Выберите один из вариантов"},
                        {value: "1", label: "Постоянный покупатель"},
                        {value: "2", label: "Интернет"},
                        {value: "3", label: "Реклама на улицах города"},
                        {value: "4", label: "Родные и близкие"},
                      ]}
                      onChange={setSource}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="card_number" className="text-[#797979]">
                      Номер штрих-кода на "Карте клиента" или номер телефона,
                      если карта получена по номеру телефона в формате 949xxxxxxx
                    </label>
                    <TextInput
                      className="mt-[5px] max-w-full"
                      name="card_number"
                      placeholder="Карта клиента"
                      value={cardNumber}
                      onChange={setCardNumber}
                    />
                  </div>

                  <DefaultButton
                    text="Сохранить анкету"
                    handleClick={saveProfile}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Profile
