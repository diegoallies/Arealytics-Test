import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faUserCircle, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons'

const UserDetails = ({user, onBack}) => {
  return (
    <div className='UserDetails'>
      <div className='UserDetails-top' style={{backgroundImage: `url(${user.img || 'https://via.placeholder.com/150x150'})`}}>
      </div>

      <div className='UserDetails-bottom'>
        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {user.address}</li>
        <li><FontAwesomeIcon icon={faUserCircle} /> {user.firstname} {user.lastname}</li>
        <li><FontAwesomeIcon icon={faUser} /> {user.gender}</li>
        <li><FontAwesomeIcon icon={faHeart} /> {user.hobbies}</li>
        <li><FontAwesomeIcon icon={faBriefcase} />  {user.occupation}</li>
        <li><FontAwesomeIcon icon={faUser} /> {user.username}</li>
        {new Date(user.join_date * 1000).toLocaleDateString()}
      </div>
      <button className='bacl' onClick={onBack}>Back</button>
    </div>
  );
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [allUserData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  

  const handleCardClick = (user) => {
    setSelectedUser(user);
  }

  const handleBack = () => {
    setSelectedUser(null);
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {selectedUser ? (
            <UserDetails user={selectedUser} onBack={handleBack} />
          ) : (
            <div className='Feed'>
             {Array.isArray(allUserData) && allUserData.slice().reverse().map((user) => (
  <div className='datacard-container' key={user._id} onClick={() => handleCardClick(user)}>
    <div className='datacard'>
      <div className='datacard-top' style={{backgroundImage: `url(${user.img || 'https://via.placeholder.com/150x150'})`}}></div>
      <div className="name">
        <FontAwesomeIcon className='NAME'  icon={faUserCircle} /> {user.firstname} {user.lastname}
        <FontAwesomeIcon icon={faUser} /> {user.gender}
      </div>
      <div className="join">
        <FontAwesomeIcon icon={faUser} />{new Date(user.join_date * 1000).toLocaleDateString()}
      </div>
    </div>
  </div>
))}

             </div>
             )}
             </div>
             )}
             </div>
             );
             };
             
             export default Home;