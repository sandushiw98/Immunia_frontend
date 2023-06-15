import Login from '../src/pages/Login/Login'
import Signup from '../src/pages/Signup/Signup'
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from '../src/pages/Home/Home';
import Donations from "../src/pages/Donations/Donations";
import NewBorn from './vaccinationByAge/newBorn/NewBorn';
import OneMonth from './vaccinationByAge/oneMonth/OneMonth';
import FourMonth from './vaccinationByAge/fourMonth/FourMonth';
import SixMonth from './vaccinationByAge/sixMonth/SixMonth';
import SevenMonth from './vaccinationByAge/sevenMonth/SevenMonth';





function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Donations" element={<Donations />} /> 
          <Route path="/newborn" element={<NewBorn/>} />
          <Route path="/onemonth" element={<OneMonth/>} />
          <Route path="/fourmonth" element={<FourMonth/>} />
          <Route path="/sixmonth" element={<SixMonth/>} />
          <Route path="/sevenmonth" element={<SevenMonth/>} />
        </Routes>
      
       
      </BrowserRouter>
      <Footer />
      
      
    </div>
  );
}

export default App;
