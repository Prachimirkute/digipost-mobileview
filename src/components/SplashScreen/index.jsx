import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./SplashScreen.css";
const SplashScreen = () => {
  const navigate = useNavigate();
  
  // Navigate to login page after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/LoginPage');
    }, 5000); // Show splash screen for 30 seconds

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="SplashScreenPage">
    </div>
  );
};

export default SplashScreen;
