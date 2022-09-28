
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Navber></Navber>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
            </Routes>
         
    </div>
  );
}

export default App;
