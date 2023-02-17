import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserCircle, faUser, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../Profile.scss"

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [img, setImg] = useState('');




  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
  setUserData(userData);
  setFirstname(userData.firstname);
  setLastname(userData.lastname);
  setGender(userData.gender);
  setOccupation(userData.occupation);
  setAddress(userData.address);
  setHobbies(userData.hobbies);
  setToken(userData.accessToken)
  setId(userData._id)
  setImg(userData.img)

}
    setLoading(false);
  }, []);

  const handleUpdate = async () => {
    try {
      // const token = localStorage.getItem(${userData.token}`);
      console.log(id)
      console.log(token)


      const response = await fetch(`http://localhost:3000/users/` + id , {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname,
          lastname,
          gender,
          occupation,
          address,
          hobbies,
          id

        })
      });
      if (!response.ok) {
        throw new Error('Update failed');
      }
      const updatedUserData = await response.json();
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      setEditMode(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/users/` + id, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        localStorage.removeItem('userData');
        window.location.reload();
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className='Profile'>
            <div className='Profile-top' style={{backgroundImage: `url(${userData.img || 'https://via.placeholder.com/150x150'})`}}>
            </div>

            <div className='Profile-bottom'>
              <div className='Profile-heading'>
                <h1>{userData.firstname} {userData.lastname}</h1>
                <button className='Profile-edit' onClick={() => setEditMode(true)}>Edit Profile</button>
                <button className='Profile-edit' onClick={handleDelete}>Delete Account</button>
              </div>

              <ul>
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {userData.address}</li>
                <li><FontAwesomeIcon icon={faUserCircle} /> {userData.firstname} {userData.lastname}</li>
                <li><FontAwesomeIcon icon={faUser} /> {userData.gender}</li>
                <li><FontAwesomeIcon icon={faHeart} /> {userData.hobbies}</li>
                <li><FontAwesomeIcon icon={faBriefcase} /> 
                {userData.occupation}</li>
</ul>
{editMode ? (
            <div className='Profile-edit-mode'>
              <label htmlFor='firstname'>First Name</label>
              <input
                type='text'
                id='firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <label htmlFor='lastname'>Last Name</label>
              <input
                type='text'
                id='lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />

              <label htmlFor='gender'>Gender</label>
              <input
                type='text'
                id='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />

              <label htmlFor='occupation'>Occupation</label>
              <input
                type='text'
                id='occupation'
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />

              <label htmlFor='address'>Address</label>
              <input
                type='text'
                id='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor='hobbies'>Hobbies</label>
              <input
                type='text'
                id='hobbies'
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
              />
              <label htmlFor='img'>Image Url</label>
              <input
                type='text'
                id='img'
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />

              {errorMessage && <p className='error-message'>{errorMessage}</p>}

              <button className='Profile-update' onClick={handleUpdate}>Update</button>
              <button className='Profile-cancel' onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <div className='Profile-view-mode'>
              {/* <button className='Profile-edit' onClick={() => setEditMode(true)}>Edit Profile</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</div>
);
};

export default Profile;