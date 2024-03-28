
import React from 'react';
import './ParcelBookServices.css'; // Import CSS for DashboardPage component
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Chart from "chart.js/auto"; // Importing the Chart.js library
// import Insurance_services from '../../Insurance_services.png'; 
import summary from '../../summary.png'; 
import charge from '../../charge.png'; 
import History from '../../History.png'; 
import messageD from '../../messageD.png'; 

const ParcelBookServices = () => {
  return (
    
    <div className="DashboardContainer">
      
    <div className="SidebarContainer"><Sidebar/></div>
    <div className="imageContainer">
      <Navbar/>
      {/* <h2 style={{color: '#8d279f', fontWeight: 'bold', marginRight:"85%" }}>Dashboard</h2> */}
      <h6 className='mainmenu'>​Book Parcel</h6>
        <div className='firstCardSection'>
          <div className='Cards'>
            {/* <h4 style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Summary</h4> */}
            <div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Size Prescribed</th>
            <th>Minimum</th>
            <th>Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>In roll form length</td>
            <td>10 cm</td>
            <td>80 cm</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Total Length + 2 diameters</td>
            <td>17 cm</td>
            <td>100 cm</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Other than roll form</td>
            <td>10 x 7 cm</td>
            <td>60 cm x 30 cm x 30 cm</td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        Note: Book Packet when sent in card form whether folded or not, shall be neither thinner nor more flexible than Inland Post Cards.
      </p>
    </div>
    </div>
          </div>

          <div className='Cards'>
  <h4 style={{ color: '#37474f9e', marginRight: '75%', marginTop: '2%' }}>Prohibitions:</h4>
  <div>
    <ul>
      <li>There shall be no personal communication enclosed or written up on a book packet.</li>
      <li>It shall not contain any paper money, postage stamps, or other stamps, Cheque, etc. Exception: It may contain a stamped self-addressed postcard, letter, or wrapper.</li>
    </ul>
  </div>



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
          <img src={charge} style={{ color: '#8d279f', fontWeight: 'bold',width:'95%' }}/>
            {/* <Pie data={data} /> */}
          </div>
          </div>
          <div className='Cards'> 
          <h4  style={{color: '#37474f9e', marginRight:"75%",marginTop:"2%"}}>Messages</h4>
          <img src={messageD} style={{ color: '#8d279f', fontWeight: 'bold',width:'95%',marginTop:"6%"}}/>
          </div>
        </div>
        
      </div>
      </div>

  );
};
export default ParcelBookServices;
