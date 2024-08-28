const SelectInput = ({name, className, values = [], errors, handleOnChange}) => {
  return (
    <select
      id={name}
      name={name}
      autoComplete="off"
      onChange={(e) => handleOnChange(e.target.value)}
      className={`w-full m-0 max-w-[450px] h-10 py-0 px-[15px] text-sm border border-[#ccc] rounded outline-0 ${className}`}
    >
      {values.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default SelectInput
