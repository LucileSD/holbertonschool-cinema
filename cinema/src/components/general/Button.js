import './general.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { text, className, onClick, icon } = props;
  return (
    <button type='button' className={className} onClick={() => onClick}>{ icon && <i icon={icon}/>}{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};

Button.defaultProps = {
  text: '',
  className: '',
  onClick: () => {},
  icon: null,
};
