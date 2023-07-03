import axios from 'axios';
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.get('http://localhost:8000/api/activity', {headers: { 'Authorization': `Bearer ${accessToken}`}})
      .then((res) => setActivities(res.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
     <nav className={small ? 'hide-nav-side' : 'nav-side'} onMouseEnter={()=> {setShowActivities(true); setSmall(false)}} onMouseLeave={() => {setShowActivities(false); setSmall(true)}}>
        <ul>
          <li id={small ? 'hide-home' : 'home'} tabindex="1" className={selected === 'home' ? 'activeli' : 'homeli'} onClick={() => setPage('home')}>
            <FontAwesomeIcon icon={faFolder}/>{!small && ' Home'}{selected === 'home' && !small && <FontAwesomeIcon className='arrow' icon={faArrowRight}/>}
          </li>
          <li id={small ? 'hide-favorite' : 'favorite'} tabindex="1" className={selected === 'favorites' ? 'activeli' : 'favoriteli'} onClick={() => setPage('favorites')}>
            <FontAwesomeIcon icon={faStar}/>{!small && ' Favorites'}{selected === 'favorites' && !small && <FontAwesomeIcon className='arrow' icon={faArrowRight}/>}
          </li>
          <li id={small ? 'hide-watchl' : 'watchl'} tabindex="1" className={selected === 'watchlater' ? 'activeli' : 'watchli'} onClick={() => setPage('watchlater')}>
            <FontAwesomeIcon icon={faClock}/>{!small && ' Watch Later'}{selected === 'watchlater' && !small && <FontAwesomeIcon className='arrow' icon={faArrowRight}/>}
          </li>
        </ul>
        {showActivities && 
        <div className='latest'>
          <h3>Latest Activities</h3>
          <hr></hr>
          <ul>
            {activities.slice(0, 9).map((element) => (
              <Activity detailedActivity={element}/>
            ))}
          </ul>
        </div>}
      </nav>
    </>
  )
}
