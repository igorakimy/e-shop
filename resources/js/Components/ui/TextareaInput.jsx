const TextareaInput = ({name, className, id, value, errors, placeholder, onChange=null, disabled = false}) => {

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <textarea
      id={id ? id : name}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={handleOnChange}
      className={`w-full max-w-[450px] h-10 p-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    ></textarea>
  )
}

export default TextareaInput
