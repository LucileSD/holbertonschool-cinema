import './general.css';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const { title, setTiltle } = props;
  const handleInput = (event) => {
    setTiltle(event);
  }
  return (
    <input type='search' placeholder={title} onChange={(e) => handleInput(e)}></input>
  )
}

SearchBar.propTypes = {
  title: PropTypes.string,
  setTiltle: PropTypes.func,
};

SearchBar.defaultProps = {
  title: '',
  setTiltle: () => {},
};
