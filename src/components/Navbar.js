import React from 'react'
import "./Navbar.css"
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';


export default function Navbar({login}) {
  const loginStatus = ()=>{
    const token = localStorage.getItem("jwt")
  if(login || token){
    return [
      <>
            <Link to="/profile">
            <li>Profile</li>
            </Link>
          <Link Link to="/createPost" >
          <li>Create Post</li>
          </Link>
      </>
    ]
  }
  else {
    return [<>
          <Link to="/signup">
            <li >SignUp</li>
          </Link>
          <Link to="/signin">
            <li>SignIn</li>
          </Link>
    </>]
  }
  }

  return (
    <div className='navbar' >
        <img src={logo} alt=''/>
        <ul className='nav-menu'>
       { loginStatus()}
        </ul>
        </div> 
  )
}
