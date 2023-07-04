import './movies.css';
import PropTypes from 'prop-types';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

export default function Filter(props) {
  const {minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle} = props;
  const listOfGenre = ['Action', 'Drama', 'Comedy', 'Biography', 'Romance', 'Thriller', 'War', 'History', 'Sport', 'Sci-Fi', 'Documentary', 'Crime', 'Fantasy'];
  return (
    <>
      <div className='filter'>
        <div>
          <div className='searchbar'>
            <SearchBar title={title} setTitle={setTitle}/>
          </div>
          <div className='multiple-inputs'>
            <Input label={'Min Date:'} type={'number'} className={'minDate'} value={minYear} setValue={setMinYear}/>
            <Input label={'Max Date:'} type={'number'} className={'maxDate'} value={maxYear} setValue={setMaxYear}/>
            <SelectInput label={'Sort:'} options={['latest', 'oldest', 'highestrated', 'lowestrated']} Multiple={false} className={"select-filter"} value={sort} setValue={setSort}/>
          </div>
        </div>
        <div className='list-genre'>
          {listOfGenre.map((oneGenre) => (
            <Tag key={oneGenre} genre={oneGenre} filter={false} genres={genres.split(',')} setGenres={setGenres}/>
          )
          )}
        </div>
      </div>
    </>
  )
};


const currentYear = new Date();

Filter.propTypes = {
  minYear: PropTypes.number,
  setMinYear: PropTypes.func,
  maxYear: PropTypes.number,
  setMaxYear: PropTypes.func,
  sort: PropTypes.string, 
  setSort: PropTypes.func,
  genres: PropTypes.string,
  setGenres: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

Filter.defaultProps = {
  minYear: currentYear.getFullYear(),
  setMinYear: () => {},
  maxYear: currentYear.getFullYear(),
  setMaxYear: () => {},
  sort: '',
  setSort: () => {},
  genres: '',
  setGenres: () => {},
  title: '',
  setTitle: () => {},
};
