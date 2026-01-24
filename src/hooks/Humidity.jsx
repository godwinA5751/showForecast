import { WiHumidity } from 'react-icons/wi';

export default function Humidity({ weather }) {
  return (
    <div className="layer-child humidity-card">
      <p className='hooks-header'>
        <WiHumidity size={30} />
        <span>HUMIDITY</span>
      </p>
      <div style={{marginTop: '-5px'}}>
        <p className='temp'>
          {Math.round(weather.currentConditions.humidity)}%
        </p>
      </div>
      <div className='average-details'
        style={{marginTop: '40px'}}
      >
        <p>
          {`The dew point is ${Math.round(weather.currentConditions.dew)}° right now.`}
        </p>
      </div>
    </div>
  )
}
