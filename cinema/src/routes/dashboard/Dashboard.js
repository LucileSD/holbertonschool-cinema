import './dashboard.css';
import PropTypes from 'prop-types';
import Header from '../navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';

const testMovie = {
  "createdAt": "2022-03-28T10:02:29.452Z",
  "genres": ["Drama", "Comedy", "Documentary", "sport"],
  "id": 2,
  "imageurls": [
      "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB468515592_.png"
  ],
  "imdbId": "tt9899344",
  "imdbrating": -1,
  "quotes": [],
  "released": 2022,
  "reviews": [],
  "runtime": -1,
  "summary": "",
  "synopsis": "Dreamers in a lonely circus. hefoiehfoiehgfv ieghoeighzoeihgie poezjgfpiozefpezjf opjefpojegfpoj",
  "title": "GodHead: In a fiction, in a dream of passion",
  "trailerUrl": [],
  "type": "movie",
  "updatedAt": "2022-03-28T10:02:29.452Z",
}

export default function Dashboard(props) {
  const { userUsername, setIsLoggedIn} = props;
  return (
    <BrowserRouter>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}></Header>
        <div className='body-dashboard'>
          <SideBar></SideBar>
          <Filter />
          <MovieCard movie={testMovie}/>
        </div>
      </div>
      <Routes>
        <Route path='/' /*element={<HomePage />}*//>
        <Route path='/favorites' /*element={<Favorites/>}*//>
        <Route path='/watchlater' /*element={<WhatchLater/>}*//>
        <Route path='/*' /*element={<Navigate to='/'/>}*//>
      </Routes>
    </BrowserRouter>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
};

Dashboard.defaultProps = {
  userUsername: '',
  setIsLoggedIn: () => {},
};
