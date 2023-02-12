import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/users/signin', {
        username,
        password
      });

      // Store the user data in the local storage
      localStorage.setItem('userData', JSON.stringify(response.data));

      dispatch({ type: 'SET_USER_DATA', payload: response.data });
  
      // Redirect to root route
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
