import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </>

  );
}

export default App;
