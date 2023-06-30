import './auth.css';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUserAstronaut, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Register(props) {
  const { username, password, setUsername, setPassword } = props;

  return (
    <>
    <div>
      <p>Create a new account</p>
      <Input label={'Username:'} type={'text'} className={'loginuser'} value={username} setValue={setUsername} icon={faUserAstronaut}></Input>
      <Input label={'Password:'} type={'text'} className={'pwduser'} value={password} setValue={setPassword} icon={faKey}></Input>
      <Button text={"Sign In"} type={"submit"} className={"buttonlogin"} onClick={() => console.log(`hello ${username}`)} icon={faPlus}></Button>
    </div>
    </>
  )
}

Register.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

Register.defaultProps = {
  username: '',
  password: '',
  setUsername: () => {},
  setPassword: () => {},
};
