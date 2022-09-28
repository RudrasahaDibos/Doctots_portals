
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='px-12' >
      <Navber></Navber>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
            </Routes>
         <
    </div>
  );
}

export default App;
