import './navigation.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
  const {userUsername, setIsLoggedIn} = props;

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className='Header'>
        <p id='title'>Cinema Guru</p>
        <nav>
          <img alt='profile 'src="https://picsum.photos/100/100"></img>
          <p>Welcome, {userUsername}!</p>
          <span onClick={logout}>Logout <FontAwesomeIcon icon={faArrowRightFromBracket}/></span>
        </nav>
      </div>
    </>
  )

}

Header.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
};

Header.defaultProps = {
  userUsername: '',
  setIsLoggedIn: () => {},
};
