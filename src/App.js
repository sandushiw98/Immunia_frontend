import Login from '../src/pages/Login/Login'
import Signup from '../src/pages/Signup/Signup'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home';
import Donations from "../src/pages/Donations/Donations";
import NewBorn from './vaccinationByAge/newBorn/NewBorn';
import OneMonth from './vaccinationByAge/oneMonth/OneMonth';
import FourMonth from './vaccinationByAge/fourMonth/FourMonth';
import SixMonth from './vaccinationByAge/sixMonth/SixMonth';
import SevenMonth from './vaccinationByAge/sevenMonth/SevenMonth';
import Dashboard from './Admin/AdminDashboard/Dashboard';
import ViewCenter from '../src/Admin/ViewCenter/ViewCenter';
import ViewParent from '../src/Admin/ViewParent/ViewParent';
import Appointments from '../src/Admin/Appointments/Appointments';
import AdminProfile from './Admin/AdminProfile/AdminProfile';
import Reviews from '../src/Admin/Reviews/Reviews';
import AdminNavbar from './Admin/AdminNavbar/AdminNavbar';
import AdminDonations from './Admin/AdminDonations/AdminDonations';
import ParentNavbar from './Parent/ParentNavbar/ParentNavbar';
import ParentSearch from './Parent/ParentSearch/ParentSearch';
import ParentBooking  from './Parent/ParentBooking/ParentBooking';
import ParentChildAccount from './Parent/ParentChildAccount/ParentChildAccount';
import ParentRecordCard from './Parent/ParentRecordCard/ParentRecordCard';
import ParentCenter from './Parent/ParentCenter/ParentCenter';
import ParentAppointment from './Parent/ParentAppointment/ParentAppointment';
import ChildProfile from './Parent/ChildProfile/ChildProfile';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newborn" element={<NewBorn />} />
          <Route path="/onemonth" element={<OneMonth />} />
          <Route path="/fourmonth" element={<FourMonth />} />
          <Route path="/sixmonth" element={<SixMonth />} />
          <Route path="/sevenmonth" element={<SevenMonth />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/adminDashboard" element={<Dashboard />} />
          <Route path="/viewCenter" element={<ViewCenter />} />
          <Route path="/viewParent" element={<ViewParent />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/adminNavbar" element={<AdminNavbar />} />
          <Route path="/AdminDonations" element={<AdminDonations />} />
          <Route path="/parentNavbar" element={<ParentNavbar />} />
          <Route path="/parentsearch" element={<ParentSearch />} />
          <Route path="/parentbooking" element={<ParentBooking />} />
          <Route path="/parentchildaccount" element={<ParentChildAccount />} />
          <Route path="/parentrecordcard" element={<ParentRecordCard />} />
          <Route path="/parentcenter" element={<ParentCenter />} />
          <Route path="/parentappointment" element={<ParentAppointment />} />
          <Route path="/adminDonations" element={<AdminDonations />} />
          <Route path="/childprofile" element={<ChildProfile />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
