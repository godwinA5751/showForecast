import { useEffect } from 'react';

export default function Movie() {
  function getMovie(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=927c7ee8f7f1bef97e1f7eddb95d5880')
    .then((response) => response.json())
    .then(json => console.log(json))
    .catch((error) => console.error(error))
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div>movie</div>
  )
}
