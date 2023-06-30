import './auth.css';
import axios from 'axios';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if(_switch) {
      axios.post('http://localhost:8000/api/auth/login', {username, password})
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken)
          setUserUsername(username)
          setIsLoggedIn(true)})
        .catch((error) => {
          console.log(error);
          setUserUsername('')
          setIsLoggedIn(false)
        })
    } else {
      axios.post('http://localhost:8000/api/auth/register', {username, password})
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken)
          setUserUsername(username)
          setIsLoggedIn(true)})
          .catch((error) => {
            console.log(error);
            setUserUsername('')
            setIsLoggedIn(false)
          })
    }
  };

  return (
    <>
    <div id='authentication'>
      <form onSubmit={handleSubmit}>
        <div id='button-container'>
          <Button text={'Sign In'} type={'button'} className={_switch ?  'activesignin' : 'signInButton'} onClick={()=>set_switch(true)}></Button>
        
          <Button text={'Sign Up'} type={'button'} className={'signUpButton'} onClick={()=>set_switch(false)}></Button>
        </div>
        { _switch && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}></Login>}
        { !_switch && <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword}></Register>}
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
