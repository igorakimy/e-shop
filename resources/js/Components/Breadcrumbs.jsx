import LogoMini from '@/Components/LogoMini'
import { Link } from '@inertiajs/react'
import { route } from 'ziggy-js'

const Breadcrumbs = ({items, children}) => {
  console.log(items)

  return (
    <div className="breadcrumbs flex items-center w-full text-nowrap text-ellipsis">
      {items && items.map((item) => {
        return item.url === route('home') ? (
          <Link title={item.title} key={item.title} href={item.url} className="part-link overflow-hidden whitespace-nowrap relative min-w-10 justify-center">
            <LogoMini className="h-4 w-4"/>
          </Link>
        ) : (
          !item.current ?
            <Link title={item.title} key={item.title} href={item.url} className="part-link overflow-hidden whitespace-nowrap text-ellipsis hover:underline">
              {item.title}
            </Link> :
            <div key={item.title} className="part-link overflow-hidden whitespace-nowrap text-ellipsis text-orange">
              {item.title}
            </div>
        )
      })}
      {children}
    </div>
  )
}

export default Breadcrumbs
