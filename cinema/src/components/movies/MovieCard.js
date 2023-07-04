import './movies.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faClock as faRegClock } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

export default function MovieCard(props) {
  const {movie} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.get('http://localhost:8000/api/titles/favorite', {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then((res) => {
        if (res.data.includes(movie)) {
          setIsFavorite(true);
        }
      })
      .catch((error) => console.log(error.message))
    axios.get('http://localhost:8000/api/titles/watchlater', {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then((res) => {
        if (res.data.includes(movie)) {
          setIsWatchLater(true);
        }
      })
      .catch((error) => console.log(error.message))
  })

  const handleClick = (type) => {
    const accessToken = localStorage.getItem("accessToken");
    if (type === 'favorite' && !isFavorite) {
      axios.post(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, {}, {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then(() => setIsFavorite(true))
      .catch((error) => console.log(error.message))
    }
    else if (type === 'favorite' && isFavorite) {
      axios.delete(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, {headers: { 'Authorization': `Bearer ${accessToken}`}})
        .then(() => setIsFavorite(false))
        .catch((error) => console.log(error.message))
    }
    else if (type === 'watchlater' && !isWatchLater) {
      axios.post(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, {}, {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then(() => setIsWatchLater(true))
      .catch((error) => console.log(error.message))
    }
    else {
      axios.delete(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, {headers: { 'Authorization': `Bearer ${accessToken}`}})
        .then(() => setIsWatchLater(false))
        .catch((error) => console.log(error.message))
    }
  }

  return (
    <>
      <div className='movie-card'>
        <li>
          <div className='icon-card'>
            <FontAwesomeIcon icon={isWatchLater ? faClock : faRegClock} className='fa-clock' onClick={() => handleClick('watchlater')}/>
            <FontAwesomeIcon icon={isFavorite ? faStar : faRegStar}  className='fa-star' onClick={() => handleClick('favorite')}/>
          </div>
          <img src={movie.imageurls} className='img-card'></img>
          <h4 key={movie.title} className='card-title'>{movie.title}</h4>
          <p key={movie.id} className='card-synop'>{movie.synopsis}</p>
          <div className='all-genre'>
            {movie.genres.map((genre) => (
              <span key={genre} className='card-genre'>{genre}</span>
            ))}
          </div>
        </li>
      </div>
    </>
  )
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

MovieCard.defaultProps = {
  movie: null,
};
