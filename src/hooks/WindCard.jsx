import "./WindCard.css";
import { degToCompass } from "../utils/windDirection";
import { WiStrongWind } from "react-icons/wi";

export default function WindCard({ weather }) {
  const windspeed = Math.round(weather.windspeed);
  const windgust = Math.round(weather.windgust || weather.windspeed);
  const direction = degToCompass(weather.winddir);


  return (
    <div className="wind-card">
      {/* LEFT INFO */}
      <div className="wind-info">
        <p className='hooks-header title' ><WiStrongWind size={30} /> <span >WIND</span></p>

        <div className="row">
          <span>Wind</span>
          <span>{windspeed
          } km/h</span>
        </div>

        <div className="row">
          <span>Gusts</span>
          <span>{windgust} km/h</span>
        </div>

        <div className="row">
          <span>Direction</span>
          <span>{weather.winddir}° {direction}</span>
        </div>
      </div>

      {/* COMPASS */}
      <div className="compass">
        <div className="dial">
          <span className="n">N</span>
          <span className="e">E</span>
          <span className="s">S</span>
          <span className="w">W</span>

          <div
            className="arrow"
            style={{
              "--rotation": `${weather.winddir + 90}deg`,
              background: `linear-gradient(90deg, #4A90E2, #0EA5E9, #FACC15, #F97316, #EF4444)` // dynamic color
            }}
          />

          <div className="center">
            <span>{windspeed}</span>
            <small>km/h</small>
          </div>
        </div>
      </div>
    </div>
  );
}