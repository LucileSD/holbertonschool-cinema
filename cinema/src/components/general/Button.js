import './general.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
  const { text, className, onClick, icon } = props;
  return (
    <button type='submit' className={className} onClick={() => onClick}>{ icon && <FontAwesomeIcon icon={icon}/>}{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};

Button.defaultProps = {
  text: '',
  className: '',
  onClick: () => {},
  icon: null,
};
