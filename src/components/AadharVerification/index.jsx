import React from "react";
import { useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from "react-simple-typewriter"
import "./AadharVerification.css";

const AadharVerification = () => {
  // const [typeEffect] =useTypewriter({
  //   words:['Aadhar Verification'],
  //   loop:{},
  //   typeSpeed:100,
  //   deleteSpeed:0,
  // })
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/FaceRecognitionComponent');
  };
  const handleOTPClick = () => {
    navigate('/OtpPage');
  };
  return (
    <div className="bg">
      <div className="AadharVerificationlogin">
      <div className="AadharVerificationBx">
      <h4 style={{ color: '#45f3ff', marginBottom: '5%',  }}>Aadhar Verification</h4>
        
        <input type="text" name="aadharNumber"  placeholder="Aadhar Card Number"  />
        {/* <input type="file" accept="image/*" /> */}
        <div className="group">
          <a href="#" onClick={handleOTPClick}>OTP</a>
        </div>
        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
      </div>
    // </div>
  );
};

export default AadharVerification;
