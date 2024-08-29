const TextInput = ({name, className, value, errors, placeholder}) => {
  return (
    <input
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    />
  )
}

export default TextInput
