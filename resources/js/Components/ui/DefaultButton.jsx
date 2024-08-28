const DefaultButton = ({className, text, children}) => {
  return (
    <div className="flex justify-center">
      <button
        className={`flex justify-center items-center py-2.5
        px-[15px] text-sm text-black border-0 rounded bg-orange
        cursor-pointer hover:underline ${className}`}
      >
        {text}
        {children}
      </button>
    </div>
  )
}

export default DefaultButton
