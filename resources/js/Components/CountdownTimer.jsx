import { useEffect, useState } from 'react'

const CountdownTimer = ({endDate, className, itemClassName}) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    updateTimer()

    const interval = setInterval(() => {
      updateTimer()
    }, 1000)

    return () => clearInterval(interval)
  }, [days, hours, minutes, seconds])

  const updateTimer = () => {
    let now = new Date()
    let diff = endDate - now

    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    let hours = Math.floor(diff / (1000 * 60 * 60))
    let minutes = Math.floor(diff / (1000 * 60))
    let seconds = Math.floor(diff / 1000)

    setDays(days)
    setHours(hours - days * 24)
    setMinutes(minutes - hours * 60)
    setSeconds(seconds - minutes * 60)
  }

  return (
    <div className={`flex ${className || ''}`}>
      <div className={`countdown-time ${itemClassName || ''}`}>
        <span className="days">{days}</span>
        <span>дней</span>
      </div>
      <div className={`countdown-time ${itemClassName || ''}`}>
        <span className="hours">{hours}</span>
        <span>часов</span>
      </div>
      <div className={`countdown-time ${itemClassName || ''}`}>
        <span className="minutes">{minutes}</span>
        <span>минут</span>
      </div>
      <div className={`countdown-time ${itemClassName || ''}`}>
        <span className="seconds">{seconds}</span>
        <span>секунд</span>
      </div>
    </div>
  )
}

export default CountdownTimer
