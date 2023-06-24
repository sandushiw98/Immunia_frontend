import Login from '../src/pages/Login/Login'
import Signup from '../src/pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from '../src/pages/Home/Home';
import Donations from "../src/pages/Donations/Donations";
import Dashboard from '../src/Admin/Dashboard/Dashboard';
import ViewCenter from '../src/Admin/ViewCenter/ViewCenter';
import ViewParent from '../src/Admin/ViewParent/ViewParent';
import Appointments from '../src/Admin/Appointments/Appointments';






function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/donations" element={<Donations />} /> 
          <Route path="/adminDashboard" element={<Dashboard />} /> 
          <Route path="/viewCenter" element={<ViewCenter/>}/>
          <Route path="/viewParent" element={<ViewParent/>}/>
          <Route path="/Appointments" element={<Appointments/>}/>
          
        </Routes>
      
       
      </BrowserRouter>
      <Footer />
      
      
    </div>
  );
}

export default App;
