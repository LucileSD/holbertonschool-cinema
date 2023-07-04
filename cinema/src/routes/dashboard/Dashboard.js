import './dashboard.css';
import PropTypes from 'prop-types';
import Header from '../navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Filter from '../../components/movies/Filter';

export default function Dashboard(props) {
  const { userUsername, setIsLoggedIn} = props;
  return (
    <BrowserRouter>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}></Header>
        <div className='body-dashboard'>
          <SideBar></SideBar>
          <Filter />
        </div>
      </div>
      <Routes>
        <Route path='/' /*element={<HomePage />}*//>
        <Route path='/favorites' /*element={<Favorites/>}*//>
        <Route path='/watchlater' /*element={<WhatchLater/>}*//>
        <Route path='/*' /*element={<Navigate to='/'/>}*//>
      </Routes>
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
