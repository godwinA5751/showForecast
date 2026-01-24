import { WiBarometer } from "react-icons/wi";
import "./hooks.css";

export default function PressureCard({ weather }) {
  const getPressureTrend = (weather) => {
  const hours = weather?.days?.[0]?.hours;
  if (!hours || hours.length < 2) return "=";

  const currentHour = new Date().getHours();
  const current = hours[currentHour]?.pressure;
  const previous = hours[currentHour - 1]?.pressure;

  if (current == null || previous == null) return "=";

  const diff = current - previous;

  if (diff > 0.5) return "↑";
  if (diff < -0.5) return "↓";
  return "=";
};


  // Typical pressure range (hPa)
  const min = 980;
  const max = 1040;

  const clamped = Math.min(Math.max(weather.currentConditions.pressure, min), max);
  const percent = (clamped - min) / (max - min);

  // Semi-circle rotation (-90° to +90°)
  const rotation = -90 + percent * 180;

  const trend = getPressureTrend(weather);

  return (
    <div className="layer-child pressure-card">
      <div className="hooks-header">
        <WiBarometer size={22} />
        <span>PRESSURE</span>
      </div>

      <div className="gauge">
        <svg viewBox="0 0 200 120">
          {/* Tick marks */}
          {[...Array(36)].map((_, i) => {
            const angle = -90 + i * 5;
            return (
              <line
                key={i}
                x1="100"
                y1="30"
                x2="100"
                y2="40"
                transform={`rotate(${angle} 100 100)`}
                className="tick"
              />
            );
          })}

          {/* Indicator */}
          <line
            x1="100"
            y1="28"
            x2="100"
            y2="43"
            className="indicator"
            transform={`rotate(${rotation} 100 100)`}
            filter= "drop-shadow(-10px 0 8px rgb(255, 255, 255  )"
          />
        </svg>

        <div className="pressure-value">
          <span className={`sign ${trend}`}>
            {trend}
          </span>
          <span className="value">{(weather.currentConditions.pressure).toLocaleString()}</span>
          <span className="unit">hPa</span>
        </div>
      </div>

      <div className="pressure-footer">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
}
