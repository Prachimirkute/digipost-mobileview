import React from "react";
import { useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor} from "react-simple-typewriter"
import "./Insurance_services.css";

const Insurance_services = () => {
  const [typeEffect] =useTypewriter({
    words:['Insurance_services'],
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

export default Insurance_services;
