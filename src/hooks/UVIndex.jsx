import { WiDaySunny } from 'react-icons/wi';

export default function UVIndex({ weather }) {
  
  const getCurrentHourlyUV = (weather) => {
    if (!weather?.days?.[0]?.hours) return null;

    const currentHour = new Date().getHours();
    return weather.days[0].hours[currentHour]?.uvindex ?? null;
  };

  const uv = getCurrentHourlyUV(weather);
  if (uv == null) return null;

  const getUVPosition = (uv) => {
    const maxUV = 11;
    const clamped = Math.min(Math.max(uv, 0), maxUV);
    return (clamped / maxUV) * 100;
  };

  const getUVInfo = (uv) => {
    if(uv === 0) return { level: "Low", message: "No risk. Enjoy the outdoors! 😎" }
    if (uv <= 2) return { level: "Low", message: "Minimal risk. Enjoy the outdoors! 😎" };
    if (uv <= 5) return { level: "Moderate", message: "Some risk. Sunglasses recommended 🕶️" };
    if (uv <= 7) return { level: "High", message: "High risk. Use sunscreen and seek shade 🌤️" };
    if (uv <= 10) return { level: "Very High", message: "Very high risk. Limit sun exposure ⛱️" };
    return { level: "Extreme", message: "Extreme risk. Avoid the sun if possible 🔥" };
  };

  const { level, message } = getUVInfo(uv);

  return (
    <div className="layer-child uv-card">
      <p className="hooks-header">
        <WiDaySunny size={30} />
        <span>UV INDEX</span>
      </p>

      <div>
        <p className="temp">{Math.round(uv)}</p>
        <span className="ave-desc">{level}</span>
      </div>

      <div className="average-details">
        <div className="uv-bar" style={{ position: "relative", margin: "30px 0 10px 0" }}>
          <div className="bar-range" />
          <div
            className="uv-dot"
            style={{ left: `${getUVPosition(uv)}%` }}
          />
        </div>

        <div className="message">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
