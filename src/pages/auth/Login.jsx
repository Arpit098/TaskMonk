import React from 'react';
import './auth.css';
import axios from "axios";



const Login = () => {
 
  const handleLogin = async() =>{
  
  }
  
  return (
    <div id="login-page">
      <div className="login">
        <h2 className="login-title">Login</h2>
        <p className="notice">Please login to access the system</p>
        <form className="form-login">
         <a  href='http://localhost:8000/auth/google' >Sign up with google </a>
        </form>
      </div>
      <div className="background">
        <h1>Welcome to the Login page</h1>
      </div>
    </div>
  );
}
export default Login;