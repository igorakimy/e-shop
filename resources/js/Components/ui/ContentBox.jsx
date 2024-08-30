const ContentBox = ({title, className, children}) => {
  return (
    <div className={`rounded - md w-full h-auto bg-white mt-5 p-5 relative ${className}`}>
      {(title) && (
        <>
          <div className="cart-header absolute top-0 left-0">
            <h1 className="text-nowrap">{title}</h1>
          </div>
          <div className="mb-12"></div>
        </>
      )}

      {children}
    </div>
  )
}

export default ContentBox
