import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CityWeather } from './components/CityWeather'
import { SearchCity } from './components/SearchCity';
import Condition from './components/Condition';
import Wind from './components/Wind';
import './App.css'

function App() {
  const [searchCity, setSearchCity] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    // Get user's location using browser Geolocation API (more accurate)
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              // Use BigDataCloud for reverse geocoding (more accurate)
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
                {
                  headers: {
                    'Accept': 'application/json',
                  }
                }
              );
              const data = await response.json();
              const city = data.city || data.locality || data.countryName || 'Unknown';
              setSearchCity(city);
            } catch (error) {
              console.error('Error getting city name:', error);
              setSearchCity('Maiduguri');
            }
          },
          (error) => {
            console.error('Geolocation error:', error);
            setSearchCity('Maiduguri');
          }
        );
      } else {
        setSearchCity('Maiduguri');
      }
    };

    getUserLocation();
  }, []);

  // Fetch weather when searchCity changes
  useEffect(() => {
    if (searchCity) {
      axios
        .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(searchCity)}?unitGroup=metric&contentType=json&key=${API_KEY}`)
        .then((res) => {
          setWeather(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [searchCity, API_KEY]);

  const handleCityChange = (city) => {
    setSearchCity(city);
  };
  return (
    <Routes>
      <Route index element={<CityWeather
        searchCity={searchCity} weather={weather}
      />} />
      <Route path='search' element={<SearchCity
        city={city}
        setCity={setCity}
        searchCity={searchCity}
        setSearchCity={handleCityChange}
        weather={weather}
        setWeather={setWeather}
      />} />
      <Route path='condition' element={<Condition />} />
      <Route path='wind' element={<Wind />} />
    </Routes>
  )
}

export default App
