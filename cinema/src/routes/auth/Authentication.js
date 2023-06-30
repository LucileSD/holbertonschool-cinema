import './auth.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

export default function Authentication(props) {
  const { setIsLoggedIn, setUserUsername } = props;
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');

  return (
    <>
    <form>
      <Button text={'Sign In'} type={'button'} className={'signInButton'} onClick={()=>set_switch(true)}></Button>
      <Button text={'Sign Up'} type={'button'} className={'signUpButton'} onClick={()=>set_switch(false)}></Button>
      { _switch && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}></Login>}
      { !_switch && <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword}></Register>}
    </form>
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
