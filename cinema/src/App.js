import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    axios.post('http://localhost:8000/api/auth', null, {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then((response) => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
        setUserUsername('');
      }
      )
  }, [])
  return (
    <>
      <div className="App">
        {isLoggedIn && <p>Dashboard</p>}
        {!isLoggedIn &&
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>}
      </div>
    </>
  );
}

export default App;
