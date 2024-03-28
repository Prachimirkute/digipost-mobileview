import React from "react";
import { useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from "react-simple-typewriter"
import "./Financial_Services.css";

const Financial_Services = () => {
  const [typeEffect] =useTypewriter({
    words:['Financial Services'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:0,
  })
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/FaceRecognitionComponent');
  };
  return (
    // <div className="box">
      <div className="login">
      <div className="ParcelServicesBx">
      <h2 style={{ color: 'black', marginBottom: '10%',  }}>{typeEffect}</h2>
        
        <input type="text" name="aadharNumber"  placeholder="Aadhar Card Number"  />
        <input type="file" accept="image/*" />
        <input type="submit" value="Submit" onClick={handleClick}/>
      </div>
      </div>
    // </div>
  );
};

export default Financial_Services;
