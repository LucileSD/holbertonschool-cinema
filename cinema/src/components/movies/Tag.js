import { useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

export default function Tag(props) {
  const {genre, filter, genres, setGenres} = props;

  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      const selectedGenre = genres.filter((g) => g !== genre);
      setGenres(selectedGenre.join(','));
      setSelected(false);
    } else {
      const unselectedGenre = [ ...genres, genre];
      setGenres(unselectedGenre.join(','));
      setSelected(true);
    }
  }

  return (
    <>
      <li className={selected ? 'tag-select' : 'tag-unselect'} onClick={handleTag}>{genre}</li>
    </>
  )
}

Tag.propTypes = {
  genre: PropTypes.string,
  filter: PropTypes.bool,
  genres: PropTypes.array,
  setGenres: PropTypes.func,
};

Tag.defaultProps = {
  genre: '',
  filter: false,
  genres: [],
  setGenres: () => {},
};
