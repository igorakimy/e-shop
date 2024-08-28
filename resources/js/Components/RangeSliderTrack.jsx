const RangeSliderTrack = ({source, target, getTrackProps}) => {

  const trackStyle = {
    position: 'absolute',
    height: 6,
    zIndex: 1,
    marginTop: 12,
    backgroundColor: 'var(--orange)',
    cursor: 'pointer',
    left: `${source.percent}%`,
    width: `${target.percent - source.percent}%`
  }

  return (
    <div
      style={trackStyle}
      {...getTrackProps()}
    />
  )
}

export default RangeSliderTrack
