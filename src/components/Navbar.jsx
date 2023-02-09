import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='links'>
                <Link className="link" to="/?cat=art"> <h5>  Most Recent </h5></Link>>
                <Link className="link" to="/?cat=art"> <h5>  Oldest first</h5></Link>>
                <Link className="link" to="/?cat=art"> <h5>  Random </h5></Link>>
                <span>John</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className="link" to="/write"> Post </Link>
                </span>
                
                

            </div>


        </div>
    </div>
  )
}
