
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Appointment from './Pages/Appointment/Appointment';


function App() {
  return (
    <div className='px-12' >
      <Navber></Navber>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/appointment" element={<Appointment />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<regis />} />
            </Routes>
         
    </div>
  );
}

export default App;
