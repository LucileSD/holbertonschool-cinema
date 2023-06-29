import './general.css';
import PropTypes from 'prop-types';

export default function SelectInput(props) {
  const { label, options, Multiple, className, value, setValue } = props;

  const handleSelect= (event) => {
    setValue(event.target.value);
  }

  return (
    <>
      <label htmlFor={`select-{className}`}>{label}</label>
      <select className={className} options={options} multiple={Multiple} id={`select-${className}`} onChange={(e) => handleSelect(e)}>
        {options.map((option)=> {
          <option value={option}>{option}</option>
        })}
      </select>
    </>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  Multiple: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
};

SelectInput.defaultProps = {
  label: '',
  options: [],
  Multiple: false,
  className: '',
  value: null,
  setValue: () => {},
};
