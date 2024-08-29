const EmailInput = ({name, className, value, errors, placeholder, autocomplete = "off"}) => {
  return (
    <input
      id={name}
      name={name}
      type="email"
      placeholder={placeholder}
      value={value}
      autoComplete={autocomplete}
      className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm outline-0 border border-[#ccc] rounded ${className}`}
    />
  )
}

export default EmailInput
