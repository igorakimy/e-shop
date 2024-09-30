import { Link, router } from '@inertiajs/react'

const Pagination = ({items}) => {

  const { meta } = items

  return meta.last_page > 1 && (
    <div className="pagination-numbers flex items-center justify-center mt-5">
      {meta.links.map((link, index) => {
        if (link.label === 'pagination.previous') {
          return <li key={index}><Link href={link.url}>&#60;</Link></li>
        } else if (link.active) {
          return <li key={index}><span className="!text-black">{link.label}</span></li>
        } else {
          return <li key={index}><Link href={link.url}>{link.label}</Link></li>
        }
      })}
    </div>
  )
}

export default Pagination
