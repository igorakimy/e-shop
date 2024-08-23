const Badge = ({className, text, children}) => {
  return (
    <div className={`label ` + className}>
      {text}
      {children}
    </div>
  )
}

export default Badge
