import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'
import LoginModalDialog from '@/Components/LoginModalDialog'
import { useState } from 'react'

const MainLayout = ({children}) => {

  const { categories } = usePage().props

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Header categories={categories} openModal={openModal} />

      <LoginModalDialog show={showModal} closeModal={closeModal}/>

      <main style={{minHeight: "683px"}}>
        <div className="max-width">
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default MainLayout;
