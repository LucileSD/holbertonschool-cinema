import './dashboard.css';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.get('http://localhost:8000/api/titles/watchlater', {headers : { 'Authorization': `Bearer ${accessToken}`}})
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error))
  })

  return (
    <>
      <div className='watchlater'>
        <h1 className='watchlater-title'>MOOVIES TO WATCH LATER</h1>
        <div className='watchlater-card'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </>
  )
}
