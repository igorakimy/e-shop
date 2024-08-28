const RangeSliderHandle = ({idx, handle, getHandleProps}) => {

  const {id, value, percent} = handle

  const handleStyle = {
    left: `${percent}%`,
    position: 'absolute',
    marginLeft: -9,
    marginTop: 6,
    zIndex: 2,
    width: 18,
    height: 18,
    border: '1px solid #111',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'var(--orange)',
    color: '#333'
  }

  const labelStyle = {
    fontSize: 14,
    marginTop: -30,
    padding: '0 10px',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: '1px solid var(--orange)',
    borderRadius: '5px',
    right: `${idx === 1 ? '0' : ''}`,
    top: `${idx === 0 ? '53px' : ''}`,
    whiteSpace: 'nowrap'
  }

  return (
    <div
      style={handleStyle}
      {...getHandleProps(id)}
    >
      <div style={labelStyle}>
        {value} ₽
      </div>
    </div>
  )
}

export default RangeSliderHandle
