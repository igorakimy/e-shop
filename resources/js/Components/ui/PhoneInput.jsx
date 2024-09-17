import InputMask from 'react-input-mask'

const PhoneInput = ({name, className, value, errors, placeholder, onChange=null, maskChar="#", alwaysShowMask=true}) => {

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value.replace(/[^0-9]/g, ''))
    }
  }

  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      maskChar={maskChar}
      alwaysShowMask={alwaysShowMask}
      onChange={handleOnChange}
      id={name}
      name={name}
      type="tel"
      placeholder={placeholder}
      value={value}
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

export default PhoneInput
