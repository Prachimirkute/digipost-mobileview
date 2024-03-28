import React from "react";
import { useNavigate } from 'react-router-dom';
// import {useTypewriter,Cursor} from "react-simple-typewriter";
import "./RegistrationPage.css";
import {motion,Cursor} from "framer-motion";
const RegistrationPage = () => {
  // const [typeEffect] =useTypewriter({
  //   words:['Update KYC Form'],
  //   loop:{},
  //   typeSpeed:100,
  //   deleteSpeed:0,
  // })
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/RegistrationPageFive');
  };

  return (
    <motion.div className="bg"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <div className="RegistrationPageLogin">
      <div className="RegistrationPageBx">
        {/* <h2 class="animated-heading" style={{ color: '#45f3ff'}}>{typeEffect}</h2> */}
        <h2 class="animated-heading" style={{ color: '#45f3ff'}}> KYC Form</h2>
        {/* <div class="progress-container">
    <div class="step active"></div>
    <div class="line1"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
    <div class="line2"></div>
    <div class="step"></div>
  </div> */}

        <h6 style={{ color: "#ffc107db"}}>What is your first and last name ?</h6>
        <input type="text" placeholder="First Name"  pattern="[A-Za-z]+" />
        <input type="text" placeholder="Last Name"  pattern="[A-Za-z]+" />
        <h6 style={{ color: "#ffc107db",marginRight: "36px"}}>What is your email address ?</h6>
        <input type="text" placeholder="Email address"  pattern="[A-Za-z]+" />
  

        {/* <input type="tel" name="phoneNumber" placeholder="Phone Number" pattern="[0-9]{10}" /> */}
        {/* <input type="email" placeholder="Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /> */}

        <input type="submit" value="Continue" onClick={handleClick}/>
      </div>
    </div>
    </motion.div>
  );
};

export default RegistrationPage;
