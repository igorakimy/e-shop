import Navbar from '@/Components/Navbar'
import Menu from '@/Components/Menu'

const Header = ({categories, openModal}) => {
  return (
    <>
      <Navbar />
      <Menu categories={categories} openModal={openModal} />
    </>
  )
}

export default Header
