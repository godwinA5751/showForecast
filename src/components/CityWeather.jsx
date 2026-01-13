// CityWeather.js
import { NavLink, useLocation } from 'react-router-dom';
import ListCity from '../assets/images/list.svg'
import Rain from '../assets/images/rainy.jfif'
import Sun from '../assets/images/sunny.jpg'
import Cloud from '../assets/images/cloudy.jfif'
import Default from '../assets/images/default.jfif'
import PartlyCloud from '../assets/images/partly-clouded.jfif'
import Night from '../assets/images/clear-night.jpg'
import './city.css'

export function CityWeather() {
  const location = useLocation();
  const weather = location.state?.weather;

  function getWeatherBackground(icon) {
    switch (icon) {
      case 'clear-night':
        return `${Night}`
      case 'rain':
        return `${Rain}`
      case 'sunny':
        return `${Sun}`
      case 'cloudy':
        return `${Cloud}`
      case 'partly cloudy':
        return `${PartlyCloud}`
      default:
        return `${Default}`
    }
  }

  return (
    <div style={{
      backgroundImage: `url(${weather && getWeatherBackground(weather.currentConditions.icon)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='city-weather-box'>
      {weather && (
        <>
          <div className='header'>
            <h2>{(weather.resolvedAddress).charAt(0).toUpperCase() + (weather.resolvedAddress).slice(1)}</h2>
            <h2>{Math.round(weather.currentConditions.temp)}°</h2>
            <h3>{weather.currentConditions.icon}</h3>
          </div>
          <div className='weekly-forecast'>
            {weather.days.map((day, index) => (
              <div key={index} className='day-forecast'>
                <h4>{new Date(day.datetime).toLocaleDateString(undefined, { weekday: 'long' })}</h4>
              </div>
            ))}
          </div>
        </>
      )}
      <NavLink to='/search'>
        <button className='btn'>
          <img src={ListCity} alt="List City" />
        </button>
      </NavLink>
    </div>
  )
}