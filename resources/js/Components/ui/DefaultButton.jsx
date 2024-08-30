const DefaultButton = ({className, text, children, handleClick, disabled = false}) => {
  return (
    <button
      className={`flex justify-center items-center py-2.5
      px-[15px] text-sm text-black border-0 rounded bg-orange
      cursor-pointer hover:underline
      ${disabled && 'disabled:bg-neutral-300 disabled:opacity-60 disabled:no-underline'} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  )
}

export default DefaultButton
