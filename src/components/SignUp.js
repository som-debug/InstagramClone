import { React, useState } from "react";
import logo from "../img/logo.png";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Toast function

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const postData = () => {
    //check email
    if (!emailRegex.test(email)) {
      notifyA("Invalid Email");
      return;
    } else if (!passRegex.test(password)) {
      notifyA(
        "Password must contain atleast 8 characters, including atleast 1 -numberic ,special character, lower case alphabet and uppercase."
      );
      return;
    }

    //sending data to server
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          navigate("/signin");
        }
        console.log(data);
      });
  };

  return (
    <div className="signup">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={logo} alt="logo" />

          <p className="loginPara">
            {" "}
            Signup to see photos and videos <br /> from your friends.{" "}
          </p>
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
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Userame"
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
          <p
            className="loginPara"
            style={{ forntSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you are agreeing to our Terms,
            <br />
            privacy policy and cookies policy.
          </p>
          <input
            type="submit"
            id="summit-btn"
            value="Sign Up"
            onClick={() => {
              postData();
            }}
          />
        </div>

        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
