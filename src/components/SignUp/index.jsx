import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {motion} from 'framer-motion';
const SignUp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegistrationPage');
  };
  const handleLoginClick = () => {
    navigate('/LoginPage');
  };
  const handleOTPClick = () => {
    navigate('/OtpPage');
  };
  return (
    <motion.div className="bg"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <div className="box">
      <div className="login">
      <div className="SignUpBx">
        <h2 style={{ color: '#45f3ff'}}>SignUp</h2>
        <input type="tel" placeholder="Email address"/>
        <input type="tel" placeholder="Phone Number"/>

        <div className="group">
          <a href="#" onClick={handleOTPClick}>OTP</a>
        </div>
        {/* <button onClick={handleClick}>Registration Page</button> */}
        <input type="submit" value="Continue" onClick={handleClick}/>
        <div className="group">
        <h6>Already have an account</h6>
            <a href="#" onClick={handleLoginClick}>Login</a>
          </div>
      </div>
      </div>
    </div>
    </motion.div>
    
  );
};

export default SignUp;
