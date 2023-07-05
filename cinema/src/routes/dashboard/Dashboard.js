import './dashboard.css';
import PropTypes from 'prop-types';
import Header from '../navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';


export default function Dashboard(props) {
  const { userUsername, setIsLoggedIn} = props;
  return (
    <BrowserRouter>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}></Header>
        <div className='body-dashboard'>
          <SideBar></SideBar>
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/watchlater' element={<WatchLater/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
        </div>
      </div>
      
      
    </BrowserRouter>
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
