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
      { icon && <FontAwesomeIcon icon={icon}/>}
      <label htmlFor={`input-{className}`}>{label}</label>
      <input type={type} className={className} onChange={(e)=> handleInput(e)} value={inputValue} {...inputAttributes} id={`input-${className}`}></input>
    </>
  )
};


Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.element,
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
