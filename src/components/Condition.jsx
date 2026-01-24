import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiRaindrop,
  WiCloudy,
  WiDayCloudy,
  WiSnow,
  WiThunderstorm,
  WiDayCloudyHigh,
  WiStrongWind,
  WiHumidity,
  WiSunset,
  WiSunrise
} from "react-icons/wi";
import "./condition.css";

const icons = {
  "clear-day": <WiDaySunny />,
  "clear-night": <WiNightClear />,
  "rain": <WiRain />,
  "cloudy": <WiCloudy />,
  "partly-cloudy-day": <WiDayCloudy />,
  "partly-cloudy": <WiDayCloudyHigh />,
  "snow": <WiSnow />,
  "rain-snow": <WiRain />,
  "thunder": <WiThunderstorm />,
  "thunder-rain": <WiThunderstorm />
};

export default function Condition() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.weather || state.dayIndex == null) {
    return (
      <div className="condition-card">
        <p>No weather data available.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  const { weather, dayIndex } = state;
  const day = weather.days[dayIndex];

  const date = new Date(day.datetime).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  const humidityColor =
    day.humidity > 70 ? "#1B9AAA" :
      day.humidity > 40 ? "#2EC4B6" :
        "#4A90E2";

  const iconColor = {
    "clear-day": "#FDB813",
    "clear-night": "#4B5563",
    "rain": "#4A90E2",
    "cloudy": "#a6c0ec",
    "partly-cloudy-day": "#FBBF24",
    "partly-cloudy": "#FBBF24",
    "snow": "#90DBF4",
    "rain-snow": "#7DD3FC",
    "thunder": "#7C3AED",
    "thunder-rain": "#7C3AED"
  };



  return (
    <div className="condition-card">
      <button className="back-btn" onClick={() => navigate(-1)}>
        X
      </button>

      <h2 className="condition-date">{date}</h2>

      <div className="condition-main">
        <div className="condition-icon">
          {React.cloneElement(
            icons[day.icon] || <WiCloudy />,
            { color: iconColor[day.icon] || "#a6c0ec" }
          )}
        </div>

        <div className="condition-temps">
          <span className="temp-max">{Math.round(day.tempmax)}°</span>
          <span className="temp-min">{Math.round(day.tempmin)}°</span>
        </div>
      </div>

      <p className="condition-desc">{day.conditions}</p>

      <div className="condition-details">
        <div>
          <WiHumidity {...{ color: humidityColor }} size={40} />
          <span>Humidity: {day.humidity}%</span>
        </div>

        <div>
          <WiStrongWind size={40} color="#4a90e2" />
          <span>Wind: {day.windspeed} km/h</span>
        </div>

        <div>
          <WiRaindrop size={40} color="#4a90e2" />
          <span>Precipitation: {day.precipprob ?? 0}%</span>
        </div>

        <div>
          <svg width="0" height="0">
            <defs>
              <linearGradient id="sunriseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF3B0" />
                <stop offset="50%" stopColor="#FFD166" />
                <stop offset="100%" stopColor="#FFB703" />
              </linearGradient>
            </defs>
          </svg>

          <WiSunrise size={40} style={{ fill: "url(#sunriseGradient)" }} />
          <span>Sunrise: {day.sunrise}</span>
        </div>

        <div>
          <svg width="0" height="0">
            <defs>
              <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F77F00" />
                <stop offset="50%" stopColor="#E76F51" />
                <stop offset="100%" stopColor="#9D0208" />
              </linearGradient>

            </defs>
          </svg>

          <WiSunset size={40} style={{ fill: "url(#sunsetGradient)" }} />
          <span>Sunset: {day.sunset}</span>
        </div>
      </div>
      <div className="hourly">
        <h3 className="hourly-title">Hourly Forecast</h3>

        <div className="hourly-scroll">
          {day.hours.slice(0, 24).map((hour, i) => {
            const hourTime = new Date(
              `${day.datetime}T${hour.datetime}`
            ).toLocaleTimeString([], { hour: "numeric" });

            return (
              <div className="hour-card" key={i}>
                <div>{hourTime}</div>
                <div>
                  {React.cloneElement(
                    icons[hour.icon] || <WiCloudy />,
                    { size: 40, color: iconColor[hour.icon] || "#a6c0ec" }
                  )}
                </div>
                <div>{Math.round(hour.temp)}°</div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
