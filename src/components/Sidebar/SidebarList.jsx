import React,{useState} from 'react'
import './style.css'; // Import CSS for DashboardPage component
import parcel_services from '../../parcel_services.png'; 
import Financial_Services from '../../Financial_Services.png'; 
import Government_services from '../../Government_services.png'; 
import Insurance_services from '../../Insurance_services.png'; 
import Appointment_Scheduling from '../../Appointment_Scheduling.png'; 
import { AiOutlineHome,AiOutlineInbox,AiOutlineMenu } from "react-icons/ai";

const SidebarList = () => {
  const [subMenuOpen, setSubMenuOpen] = useState({
    Parcel: false,
    Financial: false,
    Government: false,
    Insurance: false,
    Appointment: false
  });
  const [Toggle, setToggle] = useState(false);
  const toggleSubMenu = (menuItem) => {
    setSubMenuOpen({
      ...subMenuOpen,
      [menuItem]: !subMenuOpen[menuItem],
    });
  };
  const handleToggle = () => {
    setToggle(!Toggle);
  };
  console.log(subMenuOpen)
  return (
    <>
    {/* <img
      style={{color: '#8d279f', fontWeight: 'bold', marginRight:"50%",marginTop:"4%" }}
          className="animatedImage"
          width="50"
          height="50"
          src="https://logikk.no/images/Digipost_logo.png"
        ></img> */}
            <div className='SidebarIconContainer' >
              <AiOutlineMenu onClick={handleToggle}/>
              </div>

      {Toggle&&<ul className='SidebarIconsContainer'>
        {/* {
          SidebarData.map((val,key)=>(
            <li className='SidebarItem' key={key}>
              <a href={val.Link} className='SidebarLink'>
                <div className='SidebarIconContainer'>{val.Icon }</div>
                <div className='SidebarIcon-Label'>{val.Label}</div>
              </a>
            </li>
          ))
        } */}
        {/* <li>
        <img
      style={{color: '#8d279f', fontWeight: 'bold', marginRight:"85%",marginTop:"4%" }}
          className="animatedImage"
          width="100"
          height="100"
          src="https://logikk.no/images/Digipost_logo.png"
        ></img>
        </li> */}
        <li className='SidebarItem'>
          <a href='/DashboardPage' className='SidebarLink'>
            <div className='SidebarIconContainer'><AiOutlineHome className='SidebarIcon active' style={{ color: '#ffff', fontWeight: 'bold' }}/></div>
            <div className='SidebarIcon-Label'>Dashboard</div>
          </a>
        </li>
        <li className='SidebarItem'  onClick={() => toggleSubMenu('Parcel')}>
        {/* <a href='/ParcelServices' className='SidebarLink'> */}
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'>
              <img src={parcel_services} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/>
              {/* <AiOutlineInbox className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/> */}
              </div>
            <div className='SidebarIcon-Label'>Parcel Services</div>
          </div>
          {/* </a> */}
            <ul  className={subMenuOpen.Parcel ? 'submenu-open' : 'submenu-close'}>
              <li className='SidebarSubmenuItem'>
                <a href='/ParcelServices' className='SidebarLink'>
                  <div className='SidebarIconContainer'><AiOutlineInbox className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/></div>
                  <div className='SidebarIcon-Label'>Book Parcel</div>
                </a>
              </li>
              <li className='SidebarSubmenuItem'>
                <a href='/DashboardPage' className='SidebarLink'>
                  <div className='SidebarIconContainer'><AiOutlineInbox className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/></div>
                  <div className='SidebarIcon-Label'>Track Parcel</div>
                </a>
              </li>
              <li className='SidebarSubmenuItem'>
                <a href='/DashboardPage' className='SidebarLink'>
                  <div className='SidebarIconContainer'><AiOutlineInbox className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/></div>
                  <div className='SidebarIcon-Label'>Nearby Pick_up & Drop</div>
                </a>
              </li>
              
            </ul>
        </li>
        <li className='SidebarItem'   onClick={() => toggleSubMenu('Financial')}>
        <a href='/Financial_Services' className='SidebarLink'>
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'>
            <img src={Financial_Services} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/>
              {/* <AiOutlineWallet className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/> */}
              </div>
            <div className='SidebarIcon-Label'>Financial Services</div>
          </div>
          </a>
        </li>
        <li className='SidebarItem'   onClick={() => toggleSubMenu('Government')}>
        <a href='/Government_services' className='SidebarLink'>
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'>
            <img src={Government_services} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/>
            {/* <AiOutlineWallet className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/> */}
              </div>
            <div className='SidebarIcon-Label'>Government Services</div>
          </div>
          </a>
        </li>
        {/* <li className='SidebarItem'   onClick={() => toggleSubMenu('Insurance')}>
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'><AiOutlineWallet className='SidebarIcon' style={{ color: '#283593', fontWeight: 'bold' }}/></div>
            <div className='SidebarIcon-Label'>Insurance Services</div>
          </div>
        </li> */}
        <li className='SidebarItem'   onClick={() => toggleSubMenu('Insurance')}>
        <a href='/Insurance_services' className='SidebarLink'>
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'>
            <img src={Insurance_services} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/>
              {/* <AiOutlineWallet className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/> */}
              </div>
            <div className='SidebarIcon-Label'>Insurance Services</div>
          </div>
          </a>
        </li>
        <li className='SidebarItem'   onClick={() => toggleSubMenu('Appointment')}>
        <a href='/Appointment_Scheduling' className='SidebarLink'>
          <div  className='SidebarLink'>
            <div className='SidebarIconContainer'>
            <img src={Appointment_Scheduling} style={{ color: '#8d279f', fontWeight: 'bold',width:'80%' }}/>
              {/* <AiOutlineWallet className='SidebarIcon' style={{ color: '#8d279f', fontWeight: 'bold' }}/> */}
              </div>
            <div className='SidebarIcon-Label'>Appointment Scheduling</div>
          </div>
          </a>
        </li>
      </ul>}
      </>
  )
}

export default SidebarList