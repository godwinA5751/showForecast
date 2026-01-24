import { WiSunrise, WiSunset } from "react-icons/wi";
import { useEffect, useRef, useState } from "react";

export default function SunRise({ weather }) {
  const pathRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 20, y: 80 });
  const [isDay, setIsDay] = useState(false);

  const getSunProgress = (sunriseEpoch, sunsetEpoch) => {
    const now = Date.now() / 1000;

    if (now < sunriseEpoch) return 0;
    if (now > sunsetEpoch) return 1;

    return (now - sunriseEpoch) / (sunsetEpoch - sunriseEpoch);
  };

  useEffect(() => {
    if (!pathRef.current || !weather?.currentConditions) return;

    const updateSun = () => {
      const { sunriseEpoch, sunsetEpoch } = weather.currentConditions;

      const progress = getSunProgress(sunriseEpoch, sunsetEpoch);
      setIsDay(progress > 0 && progress < 1);

      const path = pathRef.current;
      const length = path.getTotalLength();
      const point = path.getPointAtLength(length * progress);

      setDotPos({ x: point.x, y: point.y });
    };

    updateSun();
    const interval = setInterval(updateSun, 60 * 1000);

    return () => clearInterval(interval);
  }, [weather]);

  const displayTime = isDay
    ? weather.currentConditions.sunset
    : weather.currentConditions.sunrise;

  return (
    <div className="layer-child">
      <p className="hooks-header">
        {isDay ? <WiSunset size={30} /> : <WiSunrise size={30} />}
        <span>{isDay ? "SUNSET" : "SUNRISE"}</span>
      </p>

      <p className="temp" style={{marginTop: '12px'}}>{displayTime?.slice(0, 5)}</p>

      <div className="sun-curve"
        style={{margin: '15% 4% 0 4%'}}
      >
        <svg viewBox="0 0 300 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f4f4f" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#504b4b" />
            </linearGradient>
          </defs>

          {/* Semi-circle sun path */}
          <path
            ref={pathRef}
            d="M20,80 A130,130 0 0 1 250,80"
            fill="none"
            stroke="url(#sunGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Horizon line */}
          <line
            x1="0"
            y1="70"
            x2="270"
            y2="70"
            stroke="rgb(138, 135, 135)"
            strokeWidth="4"
          />

          {/* Sun dot */}
          <circle
            cx={dotPos.x}
            cy={dotPos.y}
            r="6"
            fill={isDay ? "#ffffff" : "#9b9999"}
            style={{
              transition: "cx 0.5s ease, cy 0.5s ease",
              filter: isDay
                ? "drop-shadow(0 0 8px rgb(255, 255, 255))"
                : "none",
            }}
          />
        </svg>
      </div>

      <div className="average-details"
        style={{marginTop: '-5px', textAlign: 'center'}}
      >
        <p>
          {isDay
            ? `Sunrise: ${weather.currentConditions.sunrise.slice(0, 5)}`
            : `Sunset: ${weather.currentConditions.sunset.slice(0, 5)}`}
        </p>
      </div>
    </div>
  );
}
