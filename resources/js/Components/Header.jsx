import Navbar from '@/Components/Navbar'
import Menu from '@/Components/Menu'

const Header = ({categories}) => {
  return (
    <>
      <Navbar />
      <Menu categories={categories} />
    </>
  )
}

export default Header
