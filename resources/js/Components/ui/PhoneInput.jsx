import InputMask from 'react-input-mask'

const PhoneInput = ({name, className, value, errors, placeholder}) => {
  return (
    <InputMask mask="+7 (999) 999-99-99" maskChar="#" alwaysShowMask={true}>
      {(inputProps) => (
        <input
          {...inputProps}
          id={name}
          name={name}
          type="tel"
          placeholder={placeholder}
          value={value}
          className={`w-full max-w-[450px] h-10 py-0 px-[15px] text-sm outline-0 border border-[#ccc] rounded ${className}`}
        />
      )}

    </InputMask>

  )
}

export default PhoneInput
