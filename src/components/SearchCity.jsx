import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from '../assets/images/search.svg'
import Rain from '../assets/images/rainy.jfif'
import Sun from '../assets/images/sunny.jpg'
import Cloud from '../assets/images/cloudy.jfif'
import Default from '../assets/images/default.jfif'
import PartlyCloud from '../assets/images/partly-clouded.jfif'
import Night from '../assets/images/clear-night.jpg'
import ClearDay from '../assets/images/clear-day.webp'
import PartLyClodyNight from '../assets/images/partly-cloudy-night.jpg'
import "./search.css";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

dayjs.extend(utc);
dayjs.extend(timezone);

export function SearchCity({ city, setCity, searchCity, setSearchCity, weather, setWeather }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(searchCity)}?unitGroup=metric&contentType=json&key=${API_KEY}`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        setMessage('City not found', err);
        setTimeout(() => setMessage(''), 3000);
      });
  }, [searchCity, setWeather]);

  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); // every 1 minute

    return () => clearInterval(interval);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setSearchCity(city);
  };

  const handleCityClick = () => {
    navigate('/', { state: { weather } });
  };

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

  return (
    <div className="city-box">
      <form onSubmit={handleSubmit}>
        <input type="search" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search for a city" />
        <button type="submit" className="search">
          <img src={Search} alt="search" />
        </button>
      </form>
      {message && <p className="error">{message}</p>}
      {weather && (
        <div className="city"
          style={{
            backgroundImage: `url(${weather && getWeatherBackground(weather.currentConditions.icon)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={handleCityClick}>
          <div>
            <h3>{(weather.resolvedAddress).charAt(0).toUpperCase() + (weather.resolvedAddress).slice(1)}</h3>
            <span>{currentTime.tz(weather.timezone).format('h:mm A')}</span>
            <p>{weather.currentConditions.icon}</p>
          </div>
          <div>
            <h2>{Math.round(weather.currentConditions.temp)}°</h2>
            <p className="humidity">
              <span>H:{Math.round(weather.days[0].tempmax)}°</span>
              <span>L:{Math.round(weather.days[0].tempmin)}°</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}