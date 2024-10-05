import IconTeapot from '@/Components/Icons/IconTeapot'
import IconPhone from '@/Components/Icons/IconPhone'
import IconTablet from '@/Components/Icons/IconTablet'
import IconLaptop from '@/Components/Icons/IconLaptop'
import IconProcessor from '@/Components/Icons/IconProcessor'
import IconKeyboard from '@/Components/Icons/IconKeyboard'
import IconUsbFlash from '@/Components/Icons/IconUsbFlash'
import IconHeadphones from '@/Components/Icons/IconHeadphones'
import IconPrinter from '@/Components/Icons/IconPrinter'
import IconElectricalPanel from '@/Components/Icons/IconElectricalPanel'
import IconBattery from '@/Components/Icons/IconBattery'
import IconRouter from '@/Components/Icons/IconRouter'
import IconUsbCable from '@/Components/Icons/IconUsbCable'
import IconMonitor from '@/Components/Icons/IconMonitor'
import IconCamera from '@/Components/Icons/IconCamera'
import IconDVR from '@/Components/Icons/IconDVR'
import IconCCTVCamera from '@/Components/Icons/IconCCTVCamera'
import IconTools from '@/Components/Icons/IconTools'

export const navItems = [
  {label: "Акции", href: "promotions"},
  {label: "Карта клиента", href: "client_card"},
  {label: "Магазины", href: "shops"},
  {label: "Работа в SteelSmart", href: "work"},
  {
    label: "Клиентам",
    children: [
      {label: "Тех. поддержка", href: "tech_support"},
      {label: "Организациям и ИП", href: "corporate_department"},
      {label: "Партнёрам", href: "partners"},
      {label: "Поставщикам", href: "suppliers"},
      {label: "Доставка и оплата", href: "delivery_and_payment"},
      {label: "О компании", href: "about"},
      {label: "Условия гарантийного обслуживания", href: "warranty_terms"},
      {label: "Юридическая информация", href: "legal_info"},
      {label: "Политика конфиденциальности", href: "privacy_policy"},
      {label: "Правила продажи товаров", href: "selling_rules"},
      {label: "Правила пользования сайтом", href: "site_using_rules"},
    ]
  },
  {label: "Сервисный центр", href: "https://service.steelsmart.shop", external: true},
]

export const categoryIcons = {
  "teapot": IconTeapot,
  "phone": IconPhone,
  "tablet": IconTablet,
  "laptop": IconLaptop,
  "processor": IconProcessor,
  "keyboard": IconKeyboard,
  "headphones": IconHeadphones,
  "usb-flash": IconUsbFlash,
  "printer": IconPrinter,
  "electrical-panel": IconElectricalPanel,
  "battery": IconBattery,
  "router": IconRouter,
  "usb-cable": IconUsbCable,
  "monitor": IconMonitor,
  "camera": IconCamera,
  "dvr": IconDVR,
  "cctv-camera": IconCCTVCamera,
  "tools": IconTools,
}

