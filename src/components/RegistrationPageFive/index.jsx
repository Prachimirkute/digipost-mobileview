import React from "react";
import { useNavigate } from 'react-router-dom';
import {motion,Cursor} from "framer-motion";

const RegistrationPageFive = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegistrationPageTwo');
  };

  return (
    <motion.div className="bg"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <div className="RegisterTwoLogin">
      <div className="RegistrationPageBx2">
        {/* <h2 style={{ color: 'black', animation: 'bounce 0.5s infinite' }}>Update KYC Form</h2> */}
{/*         
        <div class="progress-container">
    <div class="step active"></div>
    <div class="linesActive"></div>
    <div class="step active"></div>
    <div class="linesActive"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
  </div> */}

        <h5 style={{ color: '#45f3ff'}}>Address Information</h5>
        <input type="text" name="State" placeholder="State" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="Address" placeholder="Address" />
        <input type="text" name="Pincode" placeholder="Pincode" />
        {/* <input type="email" placeholder="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /> */}

        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
    </div>
    </motion.div>
  );
};

export default RegistrationPageFive;
