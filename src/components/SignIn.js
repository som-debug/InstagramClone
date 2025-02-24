import React, {useState, useContext} from "react";
import "./SignIn.css";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../context/LoginContext";

export default function SignIn() {
    const {setUserLogin}= useContext(LoginContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Toast function
    
      const notifyA = (msg) => toast.error(msg);
      const notifyB = (msg) => toast.success(msg);

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const postData = () => {
      //check email
      if (!emailRegex.test(email)) {
        notifyA("Invalid Email");
        return;
      } 
  
      //sending data to server
      fetch("http://localhost:5000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            notifyA(data.error);
          } else {
            notifyB("Signed In Successfully.");
            console.log(data)
            localStorage.setItem("jwt", data)
            setUserLogin(true)
            navigate("/");
          }
          console.log(data);
        });
    };

  return (
    <div className="signIn">

<div className="form-container">
      <div className="loginForm">
        <img className="signUpLogo" src={logo} alt="logo" />
        <div>
        <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
              setEmail(e.target.value);
              }}
            />
        </div>
        <div>
        <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              placeholder="Password"
            />
        </div>
        <input type="submit" id="login-btn" value="Sign In" onClick={()=>{
          postData()
        }} />
      </div>

      <div className="loginForm2">
        Don't have an account ?
        <Link to="/signup">
          <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
        </Link>
      </div>

</div>
    </div>
  );
}
