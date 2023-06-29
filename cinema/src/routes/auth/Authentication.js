import './auth.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../components/general/Button';


export default function Authentication(props) {
  const { setIsLoggedIn, setUserUsername } = props;
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  return (
    <>
    <div>
      <form>
        <Button text={'Sign In'} className={'signInButton'} onClick={set_switch(true)}></Button>
        <Button text={'Sign Up'} className={'signUpButton'} onClick={set_switch(false)}></Button>
      </form>
    </div>
    </>
  )

}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUserUsername: PropTypes.func,
};

Authentication.defaultProps = {
  setIsLoggedIn: () => {},
  setUserUsername: () => {},
};
