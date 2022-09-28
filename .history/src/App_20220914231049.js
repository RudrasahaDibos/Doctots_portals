
import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <Navber></Navber>
            <Routes>
            <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />





            </Routes>
    </div>
  );
}

export default App;
