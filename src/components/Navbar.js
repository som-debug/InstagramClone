import React from 'react'
import "./Navbar.css"
import logo from "../img/logo.jpg";

export default function Navbar() {
  return (
    <div className='navbar' >
        <img src={logo} alt=''/>
        <ul className='nav-menu'>
            <li>SignUp</li>
            <li>SignIn</li>
            <li>Profile</li>
        </ul>
        </div>
        
  )
}
