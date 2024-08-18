const DropdownMenu = ({className, children}) => {
  return (
    <div className={`dropdown-content ` + className}>
      {children}
    </div>
  )
}

export default DropdownMenu
