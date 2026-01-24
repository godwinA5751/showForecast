import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiCloudy,
  WiDayCloudy,
  WiSnow,
  WiThunderstorm,
  WiDayCloudyHigh
} from "react-icons/wi";
import { useNavigate } from "react-router-dom";
import TenDayForecastSkeleton from "../skeletons/TenDaysForecastSkeleton";
import "./tenDays.css";

const icons = {
  "clear-day": <WiDaySunny />,
  "clear-night": <WiNightClear />,
  "rain": <WiRain />,
  "cloudy": <WiCloudy />,
  "partly-cloudy-day": <WiDayCloudy />,
  "partly-cloudy": <WiDayCloudyHigh />,
  "snow": <WiSnow />,
  "rain-snow": <WiRain />,
  "thunder-rain": <WiThunderstorm />,
  "thunder": <WiThunderstorm />
};

const gradients = {
  freezing: {
    background: "linear-gradient(90deg, #3894d1, #458db7)"
  },
  cold: {
    background: "linear-gradient(90deg, #319fda, #45afb7)", // blue tones
  },

  mild: {
    background: "linear-gradient(90deg, #56c8f2, #ebf838, #f8d538)", // light blue mix
  },

  warm: {
    background: "linear-gradient(90deg, #ebf838, #ecb92b, #ef8335)",
  },

  hot: {
  background: "linear-gradient(90deg, #f8c538, #ffa202, #ff6e07)", // 3-color gradient
  },
};

export default function TenDayForecast({ weather }) {
  const navigate = useNavigate();

  let gradientStyle;

  if (weather.currentConditions.temp < 0) {
    gradientStyle = gradients.freezing;
  } else if (weather.currentConditions.temp < 15) {
    gradientStyle = gradients.cold;
  } else if (weather.currentConditions.temp < 22) {
    gradientStyle = gradients.mild;
  } else if (weather.currentConditions.temp < 30) {
    gradientStyle = gradients.warm;
  } else {
    gradientStyle = gradients.hot;
  }

  if (!weather || !weather.days) {
    return <TenDayForecastSkeleton />;
  }

  const globalMin = Math.min(...weather.days.map(d => d.tempmin));
  const globalMax = Math.max(...weather.days.map(d => d.tempmax));

  const handleCityClick = (dayIndex) => {
    navigate('/condition', { state: { weather, dayIndex } });
  };

  return (
    <div className="forecast-card">
      <h3 className="forecast-title">15-DAY FORECAST</h3>
      <div className="forecast-box">
        {weather.days.map((day, index) => {
          const left = ((day.tempmin - globalMin) / (globalMax - globalMin)) * 100;
          const width =
            ((day.tempmax - day.tempmin) / (globalMax - globalMin)) * 100;

          const dayDate = new Date(day.datetime);
          const today = new Date();
          const isToday = dayDate.toDateString() === today.toDateString();
          const dayLabel = isToday ? 'Today' : dayDate.toLocaleDateString(undefined, { weekday: 'short' });

          const currentHour = today.getHours();

          const currentHourTemp = isToday
            ? day.hours?.[currentHour]?.temp
            : null;

          const getTempPosition = (temp, min, max) => {
            if (temp == null || max === min) return 0;

            const clamped = Math.min(Math.max(temp, min), max);
            return ((clamped - min) / (max - min)) * 100;
          };

          return (
            <div
              className="forecast-row"
              key={index}
              onClick={() => handleCityClick(index)}
            >
              <span className="day">{dayLabel}</span>

              <span className="icon">
                {icons[day.icon] || icons.cloudy}
              </span>

              <span className="temps min">{Math.round(day.tempmin)}°</span>

              <div className="bar">
                <div
                  className="range"
                  style={{
                    left: `${left}%`, width: `${width}%`, ...gradientStyle

                  }}
                />

                {isToday && currentHourTemp != null && (
                  <div
                    className="temp-dot"
                    style={{
                      left: `calc(${left + (getTempPosition(
                        currentHourTemp,
                        day.tempmin,
                        day.tempmax
                      ) * width) / 100}% )`
                    }}
                  />
                )}
              </div>

              <span className="temps max">{Math.round(day.tempmax)}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}