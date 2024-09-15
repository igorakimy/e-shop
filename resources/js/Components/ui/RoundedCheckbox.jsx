const RoundedCheckbox = ({name, className, id, value, errors, checked=false, onChange=null}) => {
  return (
    <input
      id={id ? id : name}
      name={name}
      type="checkbox"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    />
  )
}

export default RoundedCheckbox
