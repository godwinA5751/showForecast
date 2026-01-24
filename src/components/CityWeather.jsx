
import { NavLink, useNavigate } from 'react-router-dom';
import ListCity from '../assets/images/list.svg'
import Rain from '../assets/images/rainy.jfif'
import Sun from '../assets/images/sunny.jpg'
import Cloud from '../assets/images/cloudy.jfif'
import Default from '../assets/images/default.jfif'
import PartlyCloud from '../assets/images/partly-clouded.jfif'
import Night from '../assets/images/clear-night.jpg'
import ClearDay from '../assets/images/clear-day.webp'
import PartLyClodyNight from '../assets/images/partly-cloudy-night.jpg'
import TenDayForecast from './TenDaysForecast';
import WindCard from '../hooks/WindCard';
import AverageCard from '../hooks/AverageCard';
import FeelsLike from '../hooks/FeelsLike';
import Sunrise from '../hooks/SunRise';
import Humidity from '../hooks/Humidity';
import Visibility from '../hooks/Visibility';
import Prep from '../hooks/Prep';
import UVIndex from '../hooks/UVIndex';
import Pressure from '../hooks/Pressure';
import './city.css';
import GeneralSkeleton from './GeneralSkeleton';

export function CityWeather({ weather }) {
  const navigate = useNavigate();

  function getWeatherBackground(icon) {
    switch (icon) {
      case 'clear-day':
        return `${ClearDay}`
      case 'clear-night':
        return `${Night}`
      case 'rain':
        return `${Rain}`
      case 'sunny':
        return `${Sun}`
      case 'cloudy':
        return `${Cloud}`
      case 'partly-cloudy-day':
        return `${PartlyCloud}`
      case 'partly-cloudy-night':
        return `${PartLyClodyNight}`
      default:
        return `${Default}`
    }
  }

  const handleCityClick = () => {
    navigate('/wind', { state: { weather } });
  };

  // Use weather from props or location state
  const displayWeather = weather;

  return (
    <div style={{
      backgroundImage: `url(${displayWeather && getWeatherBackground(displayWeather.currentConditions.icon)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='city-weather-box'>
      {!displayWeather && (
        <GeneralSkeleton />
      )}
      {displayWeather && (
        <>
          <div className='header'>
            <h2>{(displayWeather.resolvedAddress).charAt(0).toUpperCase() + (displayWeather.resolvedAddress).slice(1)}</h2>
            <h2>{Math.round(displayWeather.currentConditions.temp)}°</h2>
            <h3>{displayWeather.currentConditions.icon}</h3>
          </div>
          <div className='sections'>
            <div className="first-section">
              <div className="condition"><TenDayForecast weather={displayWeather} /></div>
              <div className='spacer'>
                <div className='spacer-child'>
                  <AverageCard weather={displayWeather} />
                  <FeelsLike weather={displayWeather} />
                </div>
                <div className='wind' onClick={handleCityClick}>
                  <WindCard weather={displayWeather.currentConditions} />
                </div>
              </div>
            </div>
            <div className="second-section">
              <UVIndex weather={displayWeather} />
              <Sunrise weather={displayWeather} />
              <Prep weather={displayWeather} />
              <Visibility weather={displayWeather} />
              <Humidity weather={displayWeather} />
              <Pressure weather={displayWeather} />
            </div>
          </div>
        </>
      )}
      <footer>
        <NavLink to='/search'>
          <button className='btn'>
            <img src={ListCity} alt="List City" />
          </button>
        </NavLink>
      </footer>
    </div>
  )
}