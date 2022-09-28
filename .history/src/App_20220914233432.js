
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div >
      <Navber></Navber>
            <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/login" element={<Lo />} />
            </Routes>
    </div>
  );
}

export default App;
