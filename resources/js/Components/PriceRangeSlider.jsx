import { Handles, Rail, Slider, Tracks } from 'react-compound-slider'
import RangeSliderHandle from '@/Components/RangeSliderHandle'
import RangeSliderTrack from '@/Components/RangeSliderTrack'
import { useState } from 'react'

const PriceRangeSlider = () => {

  const defaultValues = [0, 300000]

  const [values, setValues] = useState(defaultValues.slice())
  const [update, setUpdate] = useState(defaultValues.slice())

  const rootStyle = {
    position: 'relative',
    width: '92%',
    height: 50,
    margin: '0 auto'
  }

  const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 10,
    borderRadius: 0,
    backgroundColor: '#e1e4e9',
  }

  const changeValues = (first, second) => {
    let n1 = parseInt(first, 10)
    let n2 = parseInt(second, 10)
    if (isNaN(n1) || isNaN(n2)) {
      return
    }
    if (n1 > n2) {
      n1 = n2 - 1
    }
    setValues([n1, n2])
  }

  return (
    <>
      <Slider
        rootStyle={rootStyle}
        domain={defaultValues}
        values={values}
        mode={2}
        step={1}
        reversed={false}
        onUpdate={(values) => setUpdate(values)}
        onChange={(values) => setValues(values)}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles emitKeyboard={(e) => {}}>
          {({handles, getHandleProps}) => (
            <div className="slider-handles">
              {handles.map((handle, index) => (
                <RangeSliderHandle
                  key={handle.id}
                  idx={index}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>

        <Tracks left={false} right={false}>
          {({tracks, getTrackProps}) => (
            <div className="slider-tracks">
              {tracks.map(({id, source, target}) => (
                <RangeSliderTrack
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>

      <div className="flex flex-wrap justify-between w-full mt-3">
        <input
          type="number"
          className="flex border border-black rounded-sm w-28 py-1 px-2"
          placeholder="от"
          value={values[0]}
          onChange={({target}) => changeValues(target.value, values[1])}
        />
        <input
          type="number"
          min={1}
          className="flex border border-black rounded-sm w-28 py-1 px-2"
          placeholder="до"
          value={values[1]}
          onChange={({target}) => changeValues(values[0], target.value)}
        />
      </div>

    </>

  )
}

export default PriceRangeSlider
