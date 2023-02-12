import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../store.js';
import "../Home.scss"

const Home = () => {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
axios
.get('http://localhost:3000/users')
.then((response) => {
dispatch(setUserData(response.data));
setLoading(false);
})
.catch((err) => console.error(err));
}, [dispatch]);

const userData = useSelector((state) => state.userData);

return loading ? (

<p>Loading...</p>
) : (
  
<div className='Feed'>


  {userData.map((user) => (
<div className='datacard-container' key={user._id}>
<div className='datacard'>
<li>Full Name: {user.fullname}</li>
<li>Email: {user.email}</li>
<li>Phone Number: {user.phone_number}</li>
<li>Join Date: {user.join_date}</li>
</div>
</div>
))}

</div>
);
};
<div className="spaceTaker"></div>

export default Home;