import './dashboard.css';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = (page) => {
      const accessToken = localStorage.getItem("accessToken");
      const headers = { 'Authorization': `Bearer ${accessToken}`};
      const params = {minYear: minYear.toString(), maxYear: maxYear.toString(), genres: genres.join(','), title, page, sort}
      axios.get('http://localhost:8000/api/titles/advancedsearch', {headers, params})
            .then((res) => setMovies(res.data.titles))
            .catch((error) => console.log(error.message))
    }
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page])

  return (
    <>
      <div className='homepage'>
        <Filter minYear={Number.parseInt(minYear)} setMinYear={setMinYear} maxYear={Number.parseInt(maxYear)} setMaxYear={setMaxYear}
        sort={sort} setSort={setSort} genres={genres.join(',')} setGenres={setGenres}
        title={title} setTitle={setTitle}/>
        <div className='movie-card-home'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
          <Button text='Load More..' className='button-load' onClick={() => setPage(page + 1)} type={'button'}/>
      </div>
    </>
  )
}
