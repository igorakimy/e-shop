const TextInput = ({name, className, id, value, errors, placeholder, onChange=null, disabled = false}) => {

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <input
      id={id ? id : name}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={handleOnChange}
      className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    />
  )
}

export default TextInput
