'use client'

import { useEffect, useState } from 'react'

import type { HelsinkiWeather } from '@/lib/weather'

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Helsinki',
  hour: '2-digit',
  minute: '2-digit',
})

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Helsinki',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

export function HelsinkiNow({ initialNow, weather }: { initialNow: string; weather: HelsinkiWeather | null }) {
  const [now, setNow] = useState(() => new Date(initialNow))

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <aside className="helsinki-now" aria-label="Current time and weather in Helsinki">
      <div>
        <p className="helsinki-now__label">Helsinki right now</p>
        <p className="helsinki-now__time">
          <time dateTime={now.toISOString()}>{timeFormatter.format(now)}</time>
          <span>{dateFormatter.format(now)}</span>
        </p>
      </div>
      {weather && (
        <div className="helsinki-now__weather">
          <strong>{weather.temperature}°</strong>
          <span>
            <b>{weather.condition}</b>
            <small>Feels like {weather.feelsLike}° · Wind {weather.windSpeed} m/s</small>
            <a className="helsinki-now__credit" href="https://open-meteo.com/" target="_blank" rel="noreferrer">Weather by Open-Meteo</a>
          </span>
        </div>
      )}
    </aside>
  )
}
