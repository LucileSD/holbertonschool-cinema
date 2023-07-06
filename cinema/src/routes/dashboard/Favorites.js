import './dashboard.css';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.get('http://localhost:8000/api/titles/favorite', {headers : { 'Authorization': `Bearer ${accessToken}`}})
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error))
  })

  return (
    <>
      <div className='favorite'>
        <h1 className='favorite-title'>MOVIES YOU LIKE</h1>
        <div className='favorite-card'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </>
  )
}
