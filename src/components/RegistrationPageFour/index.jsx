import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RegistrationPageFour.css";
import Secure from "../../Secure.gif"
const RegistrationPageFour = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AadharVerification');
  };

  return (
    <div className="bg">
    <div className="RegisterThreeLogin">
      <div className="RegistrationPageBx3">
        {/* <h2 style={{ color: 'black', animation: 'bounce 0.5s infinite' }}>Update KYC Form</h2> */}
        
        {/* <div class="progress-container">
    <div class="step active"></div>
    <div class="line"></div>
    <div class="step active"></div>
    <div class="line"></div>
    <div class="step active"></div>
    <div class="line"></div>
    <div class="step active"></div>
    <div class="line"></div>
    <div class="step active"></div>
  </div> */}

        {/* Form Inputs */}
        <h5 style={{ color: '#45f3ff'}}>Secured</h5>
        <img
      style={{color: '#8d279f', fontWeight: 'bold',marginTop:"4%" , width:"100%", height:"100%"}}
          className="animatedImage"
          width="100"
          height="100"
          src={Secure}
        ></img>
<h5 style={{ color: '#45f3ff'}}>Successfully Completed</h5>
<h6></h6>
        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPageFour;
