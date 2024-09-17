import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'
import ModalDialog from '@/Components/ModalDialog'
import LoginForm from '@/Components/LoginForm'
import { useModal } from '@/Components/Context/ModalContext'
import VerificationForm from '@/Components/VerificationForm'

const MainLayout = ({children}) => {

  const {
    modalIsOpen,
    modalType,
    modalContent,
    openModal,
    closeModal,
    closeOutside,
  } = useModal()
  const { categories } = usePage().props

  const getModalTitle = (type) => {
    switch (type) {
      case 'login':
        return 'Личный кабинет'
      case 'register_verification':
        return 'Код доступа отправлен на e-mail'
      case 'login_verification':
        return 'Временный код доступа (sms или e-mail)'
      case 'promotion':
        return 'Акция'
      default:
        return type
    }
  }

  return (
    <>
      <Header categories={categories} />

      <ModalDialog
        title={getModalTitle(modalType)}
        show={modalIsOpen}
        closeModal={closeModal}
        closeOutside={closeOutside}
      >
        {modalType === 'login' ? (
          <LoginForm closeModal={closeModal} />
        ) : modalType === 'register_verification' ? (
          <VerificationForm />
        ) : (<>{modalContent}</>)}
      </ModalDialog>

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
