import React, { useState, useRef } from "react";
import "./OtpPage.css";
import { useNavigate } from 'react-router-dom';
import Secure from "../../otp.png";

const OtpPage = () => {
  const [otp, setOTP] = useState(["", "", "", ""]); // Initialize an array to hold OTP values
  const inputRefs = useRef([]); // Refs to store references to input elements
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/LoginPage');
  };

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value; // Update OTP value at the given index
      setOTP(newOTP);

      // If you want to automatically focus on the next input field after filling one
      if (index < otp.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div>
      <div className="bg">
        <div className="RegisterThreeLogin">
          <div className="RegistrationPageBx3">
            <h4 style={{ color: '#45f3ff' }}>OTP</h4>
            <img
              style={{ color: '#8d279f', fontWeight: 'bold', marginTop: "4%", width: "80%", height: "50%" }}
              className="animatedImage"
              width="100"
              height="100"
              src={Secure}
              alt="Secure"
            ></img>
            <h5 style={{ color: '#45f3ff' }}>Verification Code</h5>
            <h6>We have sent a verification code to your mobile number</h6>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="otp-input"
                  ref={(el) => (inputRefs.current[index] = el)} // Store reference to input element
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <input type="submit" value="Continue" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
