import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/LoginPage');
  };

  return (
    <div className="bg">
    <div className="box">
      <div className="login">
      <div className="SignUpBx">
        <h5 style={{ color: '#45f3ff'}}>Forgot Password</h5>
        <input type="text" placeholder="New Password"/>
        <input type="text" placeholder="Confirm Password"/>

  
        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
