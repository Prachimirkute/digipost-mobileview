
import './DashboardPage.css'; // Import CSS for DashboardPage component
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Chart from "chart.js/auto"; // Importing the Chart.js library
// import Insurance_services from '../../Insurance_services.png'; 
import summary from '../../summary.png'; 
import charge from '../../charge.png'; 
import History from '../../History.png'; 
import messageD from '../../messageD.png'; 
import { Pie } from "react-chartjs-2";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Line } from "react-chartjs-2";
const DashboardPage = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset", 
        backgroundColor: "#8d279f", 
        borderColor: "#0000", 
        data: [0, 10, 5, 2, 20, 30, 45], 
      },
    ],
  };
  
  return (
    <>
    
    <div className="DashboardContainer">
      
    <div className="SidebarContainer"><Sidebar/></div>
    <div className="imageContainer">
      <Navbar/>
      {/* <h2 style={{color: '#8d279f', fontWeight: 'bold', marginRight:"85%" }}>Dashboard</h2> */}
      <h6 className='mainmenu'>You are in main panel</h6>
        <div className='firstCardSection'>
          <div className='Cards'>
            <h4 style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Summary</h4>
            <div>
            {/* style={{width: '70%', textAlign:"center", marginLeft:"15%"}} */}
            {/* <img src={summary} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/> */}
             <Line data={data} /> 
    </div>
          </div>

          <div className='Cards'>
          <h4  style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Your Cards</h4>
          </div>
        </div>

        <div className='SecondCardSection'>
        <div className='Cards'>
        <h4 style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>History</h4>
        <img src={History} style={{ color: '#8d279f', fontWeight: 'bold',width:'95%' }}/>
        </div>
          <div className='Cards'>
          <h4  style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Utilities</h4>
          <div>
          {/* <img src={charge} style={{ color: '#8d279f', fontWeight: 'bold',width:'95%' }}/> */}
            {/* <Pie style={{width:'95%' }} data={data} /> */}
          </div>
          </div>
          <div className='Cards'> 
          <h4  style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Messages</h4>
          <img src={messageD} style={{ color: '#8d279f', fontWeight: 'bold',width:'95%',marginTop:"6%"}}/>
          </div>
        </div>
        
      </div>
      </div>
    </>
  );
};
export default DashboardPage;
