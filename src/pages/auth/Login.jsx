import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import './auth.css';
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCYVzRkUWh065mtR8gs82FlfmLggZBuaEo",
  authDomain: "taskmonk.firebaseapp.com",
  projectId: "taskmonk",
  storageBucket: "taskmonk.appspot.com",
  messagingSenderId: "75767953490",
  appId: "1:75767953490:web:7c14ae80872b43b923c78b",
  measurementId: "G-G6EXFYG9GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Move useState here
  const navigate=useNavigate();

  const handleClick = async (e) =>{
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      // User has successfully signed in with Google
      const user = result.user;
      console.log("User signed in:", user)
      if(user){
        setIsAuthenticated(true);
        navigate("home/dashboard");
      }
      else{
        alert("Error")
      }
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Google sign-in error:", errorCode, errorMessage);
    }
  }
  return (
    <div id="login-page">
      <div className="login">
        <h2 className="login-title">Login</h2>
        <p className="notice">Please login to access the system</p>
        <form className="form-login">
          <div id="login" onClick={handleClick}> Sign With Google</div>
        </form>
      </div>
      <div className="background">
        <h1>Donec in dapibus augue sed nisi nunc suscipit eget enim sit amet</h1>
      </div>
    </div>
  );
}
export default Login;