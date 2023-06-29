import './auth.css';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import { faUserAstronaut, faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button';

export default function Login(props) {
  const {username, password, setUsername, setPassword} = props;
  return(
    <>
    <div>
      <p>Sign in with your account</p>
      <Input label={'Username:'} type={'text'} value={username} className={'loginuser'} setValue={setUsername} icon={faUserAstronaut}></Input>
      <Input label={'Password:'} type={'text'} value={password} className={'pwduser'} setValue={setPassword} icon={faKey}></Input>
      <Button text={"Sign In"} className={"buttonlogin"} onClick={setUsername} icon={faKey}></Button>
    </div>
    </>
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

Login.defaultProps = {
  username: '',
  password: '',
  setUsername: () => {},
  setPassword: () => {},
};
