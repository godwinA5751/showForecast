import { MdShowChart } from 'react-icons/md';

export default function AverageCard({ weather }) {
  const todayHigh = Math.round(weather.days[0].tempmax);
  const averageHigh = Math.round(weather.days[0].temp);

  const diff = todayHigh - averageHigh;
  const absDiff = Math.abs(diff);

  const sign = diff > 0 ? "+" : diff < 0 ? "−" : "";
  const label =
    diff > 0
      ? "above average daily high"
      : diff < 0
      ? "below average daily high"
      : "at average daily high";
  return (
    <div className='average-weather spacer-child-child'>
      <p className='hooks-header'>
        <MdShowChart size={30} />
        <span>AVERAGES</span>
      </p>
      <div>
        <p className='temp'>{sign}{absDiff}°</p>
        <span className='ave-desc'>{label}</span>
      </div>
      <div className='average-details'>
        <div className="rows">
          <span>Today</span>
          <span>H:{todayHigh}°</span>
        </div>
        <div className="rows">
          <span>Average</span>
          <span>H:{averageHigh}°</span>
        </div>
      </div>
    </div>
  )
}
