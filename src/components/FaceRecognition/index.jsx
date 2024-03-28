import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tickImage from '../../tick.png'; // Import your loader image
import './FaceDetectionComponent.css'; // Import CSS file for styling

const FaceDetectionComponent = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClickPopup = () => {
    navigate('/DashboardPage');
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg">
    <div className="faceRecognitionLogin">
      <div className="FaceRecognitionBx">
        <div className="scan">
        <h3 style={{ color: '#45f3ff', marginBottom: '15%',  }}>Face Recognition</h3>
          {/* <h5>Face Recognition</h5> */}
          <div className="face">
            <div className="dot"></div>
          </div>
          <input type="submit" value="Continue" onClick={handleClick}/>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <img src={tickImage}/>
            
            <h2 style={{ color: '#283593', fontWeight: 'bold', marginBottom: '5%' }}> Thank you!</h2>

            <p style={{ color: '#283593', fontWeight: 'bold' }}>Your details has been successfully submitted. Thanks!</p>
            <button onClick={handleClickPopup}>Submit</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default FaceDetectionComponent;
