import { AiOutlineEye } from 'react-icons/ai';
import './hooks.css';

export default function Visibility({ weather }) {
  const visibilityLabel = (km) => {
    if (km < 1) return 'Very Poor';
    if (km < 2) return 'Poor';
    if (km < 5) return 'Moderate';
    if (km < 10) return 'Good';
    if (km < 20) return 'Very Good';
    if (km < 40) return 'Excellent';
    return 'Exceptional';
  };

  return (
    <div className="layer-child visibility">
      <p className='hooks-header'>
        <AiOutlineEye size={20} style={{ opacity: 1, margin: '0 5px 0 0' }} />
        <span>VISIBILITY</span>
      </p>
      <div>
        <p className='temp'>
          {`${Math.round(weather.currentConditions.visibility)} km`}
        </p>
      </div>
      <div className='average-details'
        style={{marginTop: '50px'}}
      >
        <p>
          {`${visibilityLabel(weather.currentConditions.visibility)} view.`}
        </p>
      </div>
    </div>
  )
}
