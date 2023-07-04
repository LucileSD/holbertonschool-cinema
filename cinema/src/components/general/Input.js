import './general.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Input(props) {
  const { label, type, className, icon, inputAttributes, value, setValue} = props;
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (event) => {
    setInputValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <>
      <div id='global-input'>
        <div id='icon-label'>
          { icon && <FontAwesomeIcon className='icon' icon={icon}/>}
          <label htmlFor={`icon-label`}>{label}</label>
        </div>
          <input type={type} className={className} onChange={(e)=> handleInput(e)} value={inputValue} {...inputAttributes} id={`input-${className}`}></input>
      </div>
    </>
  )
};


Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.object,
  inputAttributes: PropTypes.object,
};

Input.defaultProps = {
  label: '',
  type: '',
  className: '',
  value: undefined,
  setValue: () => {},
  icon: null,
  inputAttributes: {},
};
