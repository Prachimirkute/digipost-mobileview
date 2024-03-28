import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./RootLayout";
import LoginPage from "./LoginPage";
import DashboardPage from './DashboardPage';
import SignUp from './SignUp';
import RegistrationPage from './RegistrationPage';
import AadharVerification from './AadharVerification';
import RegistrationPageTwo from './RegistrationPageTwo';
import RegistrationPageThree from './RegistrationPageThree';
import RegistrationPageFour from './RegistrationPageFour';
import FaceRecognitionComponent from './FaceRecognition';
import ParcelServices from './ParcelServices';
import Financial_Services from './Financial_Services';
import Government_services from './Government_services';
import Insurance_services from './Insurance_services';
import Appointment_Scheduling from './Appointment_Scheduling';
import ForgotPassword from './ForgotPassword';
import LoderPage from './LoderPage';
import RegistrationPageFive from './RegistrationPageFive';
import OtpPage from './OtpPage';
import SplashScreen from './SplashScreen';
import {AnimatePresence} from 'framer-motion';
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
       {/* <RootLayout> */}
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={<LoginPage />}></Route> */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="LoginPage" element={<LoginPage />}></Route>
          <Route path="DashboardPage" element={<DashboardPage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="RegistrationPage" element={<RegistrationPage />} />
          <Route path="RegistrationPageTwo" element={<RegistrationPageTwo />} />
          <Route path="RegistrationPageThree" element={<RegistrationPageThree />} />
          <Route path="RegistrationPageFour" element={<RegistrationPageFour />} />
          <Route path="AadharVerification" element={<AadharVerification />} />
          <Route path="FaceRecognitionComponent" element={<FaceRecognitionComponent />} />
          <Route path="ParcelServices" element={<ParcelServices />} />
          <Route path="Financial_Services" element={<Financial_Services />} />
          <Route path="Government_services" element={<Government_services />} />
          <Route path="Insurance_services" element={<Insurance_services />} />
          <Route path="Appointment_Scheduling" element={<Appointment_Scheduling />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="LoderPage" element={<LoderPage />} />
          <Route path="RegistrationPageFive" element={<RegistrationPageFive />} />
          <Route path="OtpPage" element={<OtpPage />} />
          <Route path="SplashScreen" element={<SplashScreen />} />
        </Routes>
        {/* </RootLayout> */}
        </AnimatePresence>
  );
};

export default AnimatedRoutes;
