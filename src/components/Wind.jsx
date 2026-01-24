import './Wind.css'
import { useNavigate } from 'react-router-dom';

export default function Wind({ weather }) {
const navigate = useNavigate();

const handleCityClick = () => {
    navigate('/', { state: { weather } });
  };
  return (

    <div className='body'><button className="back-btn" onClick={handleCityClick}>
      X
    </button></div>
  )
}
