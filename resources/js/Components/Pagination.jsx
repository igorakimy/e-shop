import { Link } from '@inertiajs/react'

const Pagination = ({items}) => {

  const {prev_page_url, path, current_page, last_page} = items

  return last_page > 1 && (
    <div className="pagination-numbers flex items-center justify-center mt-5">

      {prev_page_url && <li><Link href={prev_page_url}>&#60;</Link></li>}

      {(() => {
        let page = 1
        let links = []
        while(page < 5 && current_page - page > 0) {
          links.push(<li key={page}><Link href={`${path}?page=${current_page - page}`}>{current_page - page}</Link></li>)
          page++
        }
        return links.reverse()
      })()}

      <li><span className="!text-black">{current_page}</span></li>

      {(() => {
        let page = 1
        let links = []
        while(page < 5 && current_page + page <= last_page) {
          links.push(<li key={page}><Link href={`${path}?page=${current_page + page}`}>{current_page + page}</Link></li>)
          page++
        }
        return links
      })()}

    </div>
  )
}

export default Pagination
