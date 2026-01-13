import { Routes, Route } from 'react-router'
import { useState } from 'react';
import { CityWeather } from './components/CityWeather'
import { SearchCity } from './components/SearchCity';
import './App.css'

function App() {
  const [searchCity, setSearchCity] = useState('Maiduguri');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

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
    </Routes>
  )
}

export default App
