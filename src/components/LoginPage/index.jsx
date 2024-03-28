import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import loaderImage from '../../loader.gif';
import loginuser from '../../loginuser.png';
import bg from '../../backgroundimage.png'
import "./Login.css";
import LoderPage from "../LoderPage";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignUpClick = () => {
    setLoading(true); //
    setTimeout(() => {
      setLoading(false); 
      navigate('/signup');
    }, 5000); 
  };

  const handleClick = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      navigate('/DashboardPage');
    }, 5000); 
  };
  const handleForgotClick =()=>{
    setLoading(true); //
    setTimeout(() => {
      setLoading(false); 
      navigate('/ForgotPassword');
    }, 5000); 
  }
  return (
    <>
    {!loading &&  (
    <div className="bg">
    <div className={`box ${loading ? 'loading' : ''}`}>
      {loading && <div className="loader-overlay"><img src={loaderImage} alt="Loading..." /></div>}
      <div className="loginL">
        <div className="loginBx">
          <h6>Welcome</h6>
          <img
      style={{color: '#8d279f', fontWeight: 'bold',marginTop:"4%" , width:"100", height:"100"}}
          className="animatedImage"
          width="50"
          height="50"
          src={loginuser}
        ></img>
        <h5>Enter your security password</h5>

          <input type="text" placeholder="Password"/>
          <input type="submit" value="Sign In" onClick={handleClick}/>

          <div className="group">
            <a href="#" onClick={handleForgotClick}>Forgot Password</a>
            <a href="#" onClick={handleSignUpClick}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )}
  {loading && <LoderPage/>}
  </>
  );
};

export default LoginPage;
