import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Fixed typo here
import "./Login.css";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password) // Use 'auth' as the first argument
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // You can now navigate to another page if needed
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-in errors here
        console.error(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) // Use 'auth' as the first argument
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle registration errors here
        console.error(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // e-event being in putted
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // e-event being in putted
          />
          <button
            className="login-signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON EDUCATIONAL CLONE conditions of
          Use & Sale. Please see our Privacy Notice. our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={register}
          className="login-registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
