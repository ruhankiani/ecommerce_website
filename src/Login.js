import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    return false;
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          alt=""
          src= {require('./Media/logo.jpeg')}
        />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <div className="login_form">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </div>

        <p>
          {" "}
          by signing in you are agreeing to Ruhan's conditions of use
          and sale
        </p>

        <button onClick={register} className="login_registerButton">
          Create your new Acount
        </button>
      </div>
    </div>
  );
}

export default Login;
