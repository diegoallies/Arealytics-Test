import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="auth">
    <h1>Register</h1>
    <form>
    <div className='box'>
     <div className='registerForm'>
        <div className='testOne'>
            <input type="text" placeholder='username'/>
            <input required type="password" placeholder='password'/>
            <input requiredtype="text" placeholder='first name'/>
            <input required type="text" placeholder='last name'/>
        </div>
        <div className='testTwo'>
            <input requiredtype="text" placeholder='gender'/>
            <input requiredtype="text" placeholder='location'/>
            <input requiredtype="text" placeholder='occupation'/>
            <input requiredtype="text" placeholder='gender'/>
        </div>
        </div>

        <div className='btnSide'>
            <button className='BTN'>Register</button>
            
            <p>This is an error!</p>
            
            <span>Already have a account? <Link to="/login">Login</Link></span>
        </div>
      
    </div>
       
        
        
        


        
    </form>
    </div>
  )
}
