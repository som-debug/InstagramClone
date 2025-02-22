import React from "react";
import logo from "../img/logo.png";
import "./SignUp.css";
import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div className="signup">
      <div className="form-container">

<div className = "form" >


        <img className="signUpLogo" src={logo} alt="logo" />

        <p className="loginPara">
          {" "}
          Signup to see photos and videos <br /> from your friends.{" "}
        </p>
        <div>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" name="name" id="name" placeholder="Full Name" />
        </div>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Userame"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
      <p className="loginPara" 
      style={{forntSize:"12px", margin:"3px 0px"}}>
        By signing up, you are agreeing to our Terms,
        <br />
        privacy policy and cookies policy.
      </p>
      <input type="submit" id="summit-btn" value="Sign Up" />
</div>

<div className= "form2">
  Already have an account ?

  <Link to="/signin" >
  <span style = {{color:"blue", cursor:"pointer"}}> Sign In</span>
  </Link>
</div>

    </div>
      </div>

  );
}
