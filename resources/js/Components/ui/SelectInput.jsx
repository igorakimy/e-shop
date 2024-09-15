const SelectInput = ({name, className, values = [], errors, onChange=null}) => {

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <select
      id={name}
      name={name}
      autoComplete="off"
      onChange={handleOnChange}
      className={`w-full m-0 max-w-[450px] h-10 py-0 px-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    >
      {values.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default SelectInput
