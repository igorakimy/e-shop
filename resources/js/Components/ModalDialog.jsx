import IconClose from '@/Components/Icons/IconClose'

const ModalDialog = (props) => {

  const {
    title,
    className,
    show,
    closeModal,
    withClose = true,
    closeOutside,
    children
  } = props

  return (
    <>
      <div className={`bg-wrap ${!show ? '!hidden' : ''}`}></div>
      <div onClick={() => closeOutside && closeModal(true)} className={`${!show ? '!hidden' : ''} wrap-modal-dialog fixed left-0 top-0 w-full h-full z-20 ${className}`}>
        <div className="flex w-full h-full justify-center items-center">
          <div className="modal-dialog p-5">
            <div className="flex items-center md-header mb-5">
              <h2 className="">{title}</h2>
              {withClose && (
                <div
                  className="close-modal-dialog flex justify-center
                  items-center w-[34px] h-[34px] bg-orange rounded cursor-pointer"
                  onClick={() => closeModal(true)}
                >
                  <IconClose className="fill-white w-5 h-5"/>
                </div>
              )}
            </div>
            <div className="md-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ModalDialog
