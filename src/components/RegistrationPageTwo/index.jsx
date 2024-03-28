import React from "react";
import { useNavigate } from 'react-router-dom';
import "./RegistrationPageTwo.css";
import kycphone from "../../kycphone.png"
const RegistrationPageTwo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegistrationPageThree');
  };

  return (
    <div className="bg">
    <div className="RegisterTwoLogin">
      <div className="RegistrationPageBx2">
        {/* <h2 style={{ color: 'black', animation: 'bounce 0.5s infinite' }}>Update KYC Form</h2> */}
        
        {/* <div class="progress-container">
    <div class="step active"></div>
    <div class="linesActive"></div>
    <div class="step active"></div>
    <div class="linesActive"></div>
    <div class="step active"></div>
    <div class="linesActive"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
  </div> */}

        <h4 style={{ color: '#45f3ff'}}>Verification Code</h4>
        <img
      style={{color: '#8d279f', fontWeight: 'bold',marginTop:"4%" }}
          className="animatedImage"
          width="100"
          height="100"
          src={kycphone}
        ></img>
        <h6 style={{ color: "#ffc107db",marginRight: "36px",height:"100%"}}>What is your phone number ?</h6>
        <input type="tel" name="phoneNumber" placeholder="Phone Number" pattern="[0-9]{10}" />
        {/* <input type="email" placeholder="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /> */}

        <input type="submit" value="Send Code" onClick={handleClick}/>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPageTwo;
