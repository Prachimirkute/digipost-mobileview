import React, { useState } from "react";
import './Navbar.css'; // Import your CSS file for navbar styles
import { FiSearch } from 'react-icons/fi'; 
import message from '../../message.png'; 
import logout from '../../logout.png';
import loaderImage from '../../loader.gif';
import { useNavigate } from 'react-router-dom'; 
const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true); //
    setTimeout(() => {
      setLoading(false); 
      navigate('/LoginPage');
    }, 2000); 
  };
 
  return (
    <nav className="navbar">
        <div>
        {loading && <div className="loader-overlay"><img src={loaderImage} alt="Loading..." /></div>}
        <img src={message} className="navbarEnd"/>
        <img src={logout} className="navbarEnd" onClick={handleClick}/>
        </div>
        {/* <FiSearch className='SidebarIcon' style={{ color: '#283593', fontWeight: 'bold' }}/></div> */}
            {/* <div className='SidebarIcon-Label'>Dashboard</div> */}
    </nav>
  );
};

export default Navbar;