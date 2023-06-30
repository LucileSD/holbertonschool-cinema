import './dashboard.css';
import PropTypes from 'prop-types';
import Header from '../navigation/Header';

export default function Dashboard(props) {
  const { userUsername, setIsLoggedIn} = props;
  return (
    <>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}></Header>
      </div>
    </>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
};

Dashboard.defaultProps = {
  userUsername: '',
  setIsLoggedIn: () => {},
};
