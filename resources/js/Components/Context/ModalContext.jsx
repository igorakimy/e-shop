import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalType, setModalType] = useState('login')
  const [modalContent, setModalContent] = useState(null)

  const openModal = (type, content = '') => {
    setModalType(type)
    setModalContent(content)
    setModalIsOpen(true)
  };

  const closeModal = () => {
    setModalType(null)
    setModalContent(null)
    setModalIsOpen(false)
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen, modalType, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
