import './auth.css';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import { faUserAstronaut, faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button';

export default function Login(props) {
  const { username, password, setUsername, setPassword } = props;
  return(
    <>
    <div id='login'>
      <p>Sign in with your account</p>
      <Input label={'Username:'} type={'text'} className={'loginuser'} value={username} setValue={setUsername} icon={faUserAstronaut}></Input>
      <Input label={'Password:'} type={'password'} className={'pwduser'} value={password} setValue={setPassword} icon={faKey}></Input>
      <Button text={"Sign In"} type={"submit"} className={"buttonlogin"} icon={faKey}></Button>
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
