import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Single = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="SingleUser">
      <h2>{userData.username}'s Profile</h2>
      <div className="user-info">
        <div className="user-img" style={{ backgroundImage: `url(${userData.img || 'https://via.placeholder.com/150x150'})` }}></div>
        <div className="user-details">
          <p>Address: {userData.address}</p>
          <p>Name: {userData.firstname} {userData.lastname}</p>
          <p>Gender: {userData.gender}</p>
          <p>Hobbies: {userData.hobbies}</p>
          <p>Occupation: {userData.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
