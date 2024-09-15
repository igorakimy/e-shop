import InputMask from 'react-input-mask'

const DateInput = ({name, className, value, errors, placeholder, onChange=null, alwaysShowMask = true}) => {

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <InputMask
      mask="99.99.9999"
      maskChar="_"
      alwaysShowMask={alwaysShowMask}
      id={name}
      name={name}
      type="tel"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    >
      {(inputProps) => (
        <input
          {...inputProps}
          className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm outline-0 border border-[#ccc] rounded ${className}`}
        />
      )}
    </InputMask>
  )
}

export default DateInput
