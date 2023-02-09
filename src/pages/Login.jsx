import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="auth">
        <h1>Login</h1>
        <div className='logBox'>
            <form>
            <div className='loginPage'>
                <input required type="text" placeholder='username'/>
                <input required type="text" placeholder='password'/>
                <button className='LBTN'>Login</button>
                <p>This is an error!</p>
                <span>Dont you have a account? <Link to="/register">Register</Link></span>
            </div>
            
        </form>
        </div>
        
        </div>
  )
}
