import './general.css';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { label, type, className, value, setValue, icon, inputAttributes} = props;
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      { icon && <FontAwesomeIcon icon={icon}/>}
      <label htmlfor={`input-{className}`}>{label}</label>
      <input type={type} className={className} value={value} onChange={(e)=> handleInput(e)} {...inputAttributes} id={`input-{className}`}></input>
    </>
  )
};


Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.element,
  inputAttributes: PropTypes.object,
};

Input.defaultProps = {
  label: '',
  type: '',
  className: '',
  value: null,
  setValue: () => {},
  icon: null,
  inputAttributes: {},
};
