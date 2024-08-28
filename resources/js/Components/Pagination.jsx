import { Link } from '@inertiajs/react'

const Pagination = ({items}) => {
  return (
    <div className="pagination-numbers flex items-center justify-center mt-5">
      <li><Link href="/">&#60;</Link></li>
      <li><Link href="/">1</Link></li>
      <li><Link href="/">2</Link></li>
      <li><Link href="/">3</Link></li>
      <li><Link href="/">4</Link></li>
      <li><Link href="/">5</Link></li>
      <li><Link href="/">&#62;</Link></li>
    </div>
  )
}

export default Pagination
