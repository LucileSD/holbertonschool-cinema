import './general.css';
import PropTypes from 'prop-types';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar(props) {
  const { title, setTitle } = props;
  const handleInput = (event) => {
    setTitle(event.target.value);
  }
  return (
    <>
      <div className='searchbar'>
        <div className='icon-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <input type={'search'} className='search-input' placeholder={"Search Movie ... "} onChange={(e) => handleInput(e)}></input>
      </div>
    </>  )
}

SearchBar.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

SearchBar.defaultProps = {
  title: '',
  setTitle: () => {},
};
