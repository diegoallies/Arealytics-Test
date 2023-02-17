import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import '../Register.css';

const Register = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [address, setAddress] = useState('');
const [occupation, setOccupation] = useState('');
const [hobbies, setHobbies] = useState('');
const [gender, setGender] = useState('');
const [img, setImg] = useState('');
const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const navigate = useNavigate();

const handleRegister = async (event) => {
event.preventDefault();
setLoading(true);
setTimeout(async () => {
try {
const response = await fetch('http://localhost:3000/users/signup', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password, firstname, lastname, address, occupation, hobbies, gender, img })
});
if (!response.ok) {
throw new Error('Register failed');
}
const userData = await response.json();

// Save the user data to local storage
localStorage.setItem('userData', JSON.stringify(userData));

// Redirect to root route
navigate("/");
} catch (error) {
setErrorMessage(error.message);
setLoading(false);
}
}, 4000);
};

return (
<div className="auth">
<h1>Register</h1>
{errorMessage && <div>{errorMessage}</div>}
{loading && (
<div className="loading">
<ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
</div>
)}
<form onSubmit={handleRegister}>
<div className="left-group">
<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="text"
placeholder="First Name"
value={firstname}
onChange={(e) => setFirstname(e.target.value)}
/>
<input
type="text"
placeholder="Last Name"
value={lastname}
onChange={(e) => setLastname(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div>
<div className="right-group">
<input
type="text"
placeholder="Address"
value={address}
onChange={(e) => setAddress(e.target.value)}
/>
<input
type="text"
placeholder="Occupation"
value={occupation}
onChange={(e) => setOccupation(e.target.value)}
/>
<input
type="text"
placeholder="Hobbies"
value={hobbies}
onChange={(e) => setHobbies(e.target.value)}
/>
<input
type="text"
placeholder="Gender"
value={gender}
onChange={(e) => setGender(e.target.value)}
/>
</div>
<input
type="text"
placeholder="Image URL"
value={img}
onChange={(e) => setImg(e.target.value)}
/>
{/* <input type="file" onChange={(e) => setImg(e.target.files[0])} /> */}
<button type="submit">Sign up</button>
</form>
</div>
);
};
export default Register;