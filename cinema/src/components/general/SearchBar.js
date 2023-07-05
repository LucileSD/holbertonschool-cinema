import './general.css';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const { title, setTitle } = props;
  const handleInput = (event) => {
    setTitle(event.target.value);
  }
  return (
    <input type={'search'} placeholder={"Search Movie ... "} onChange={(e) => handleInput(e)}></input>
  )
}

SearchBar.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

SearchBar.defaultProps = {
  title: '',
  setTitle: () => {},
};
