import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RegistrationPageThree.css";
import kycverify from "../../kycverify.png"
const RegistrationPageThree = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegistrationPageFour');
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
    <div class="step"></div>
  </div> */}

        {/* Form Inputs */}
        <h5 style={{ color: '#45f3ff'}}>Verify your identity</h5>
        <img
      style={{color: '#8d279f', fontWeight: 'bold',marginTop:"4%" }}
          className="animatedImage"
          width="100"
          height="100"
          src={kycverify}
        ></img>
        <input type="text" placeholder="Country"  pattern="[A-Za-z]+" />
        <input type="text" name="address" placeholder="Passport" />
        {/* <input type="email" placeholder="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /> */}

        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPageThree;
