import { WiRaindrop } from 'react-icons/wi';
export default function Prep({ weather }) {
  const getRainStreak = (days) => {
    const streak = [];
    for (let day of days) {
      if (day.precip > 0 || day.precipprob > 50) {
        streak.push(day);
      } else if (streak.length) {
        break;
      }
    }
    return streak;
  };
  
  const getPrecipMessage = (days) => {
    const streak = getRainStreak(days);

    if (!streak.length) {
      return "No rain expected for the next several days ☀️";
    }

    if (streak.length === 1) {
      return `Rain expected tomorrow (${streak[0].precip} mm) 🌧️`;
    }

    return `Rain expected for the next ${streak.length} days 🌧️`;
  };

  return (
    <div className="layer-child precip">
      <p className='hooks-header'>
        <WiRaindrop size={30} />
        <span>PRECIPITATION</span>
      </p>
      <div style={{marginTop: '-21px'}}>
        <p className='temp'>{Math.round(weather.currentConditions.precip)} mm</p>
        <span className='ave-desc'>Today</span>
      </div>
      <div className='average-details'
        style={{marginTop: '15px'}}
      >
        <p>
          {getPrecipMessage(weather.days)}
        </p>
      </div>
    </div>
  )
}
