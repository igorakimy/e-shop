const Badge = ({className, text, onClick, children}) => {
  return (
    <div className={`label ` + className} onClick={onClick}>
      {text}
      {children}
    </div>
  )
}

export default Badge
