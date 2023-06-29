import './general.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Input(props) {
  const { label, type, className, icon, inputAttributes} = props;
  const [value, setValue] = useState();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      { icon && <FontAwesomeIcon icon={icon}/>}
      <label htmlFor={`input-{className}`}>{label}</label>
      <input type={type} className={className} value={value} onChange={(e)=> handleInput(e)} {...inputAttributes} id={`input-${className}`}></input>
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
