import { WiThermometer } from "react-icons/wi";

export default function FeelsLike({ weather }) {
  return (
    <div className='feels-like spacer-child-child'>
      <p className='hooks-header'>
        <WiThermometer size={30} />
        <span>FEELS LIKE</span>
      </p>
      <p className='temp'>{Math.round(weather.currentConditions.feelslike)}°</p>
      <p className='description'>{weather.description}</p>
    </div>  
  )
}
