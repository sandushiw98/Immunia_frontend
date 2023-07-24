import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Donations from "../src/pages/Donations/Donations";
import NewBorn from "./vaccinationByAge/newBorn/NewBorn";
import OneMonth from "./vaccinationByAge/oneMonth/OneMonth";
import FourMonth from "./vaccinationByAge/fourMonth/FourMonth";
import SixMonth from "./vaccinationByAge/sixMonth/SixMonth";
import SevenMonth from "./vaccinationByAge/sevenMonth/SevenMonth";
import Dashboard from "./Admin/AdminDashboard/Dashboard";
import ViewCenter from "../src/Admin/ViewCenter/ViewCenter";
import ViewParent from "../src/Admin/ViewParent/ViewParent";
import Appointments from "../src/Admin/Appointments/Appointments";
import AdminProfile from "./Admin/AdminProfile/AdminProfile";
import Reviews from "../src/Admin/Reviews/Reviews";
import AdminNavbar from "./Admin/AdminNavbar/AdminNavbar";
import AdminDonations from "./Admin/AdminDonations/AdminDonations";
import AdminCenterSignup from "./Admin/AdminCenterSignup/AdminCenterSignup";
import ParentNavbar from "./Parent/ParentNavbar/ParentNavbar";
import ParentSearch from "./Parent/ParentSearch/ParentSearch";
import ParentBooking from "./Parent/ParentBooking/ParentBooking";
import ParentChildAccount from "./Parent/ParentChildAccount/ParentChildAccount";
import ParentRecordCard from "./Parent/ParentRecordCard/ParentRecordCard";
import ParentCenter from "./Parent/ParentCenter/ParentCenter";
import ParentAppointment from "./Parent/ParentAppointment/ParentAppointment";
import ChildProfile from "./Parent/ChildProfile/ChildProfile";
import ParentDashboard from "./Parent/ParentDashboard/ParentDashboard";
import VaccinationNavbar from "./VaccinationCenter/VaccinationNavbar/VaccinationNavbar";
import VaccinationDashboard from "./VaccinationCenter/VaccinationDashboard/VaccinationDashboard";
import VaccinationDonation from "./VaccinationCenter/VaccinationDonation/VaccinationDonation";
import VaccinationAppointments from "./VaccinationCenter/VaccinationAppointments/VaccinationAppointments";
import VaccinationUpdate from "./VaccinationCenter/VaccinationUpdate/VaccinationUpdate";
import VaccinationSchool from "./VaccinationCenter/VaccinationSchool/VaccinationSchool";
import VaccinationVaccines from "./VaccinationCenter/VaccinationVaccines/VaccinationVaccines";
import ParentNotification from "./Parent/ParentNotification/ParentNotification";
import DownloadPDFButton from "./components/DownloadPDFButton/DownloadPDFButton";
import Map from "./components/Map/Map";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
            <Route path="/adminDonations" element={<AdminDonations />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/adminNavbar" element={<AdminNavbar />} />
            <Route path="/adminDonations" element={<AdminDonations />} />
            <Route path="/parentNavbar" element={<ParentNavbar />} />
            <Route path="/parentsearch" element={<ParentSearch />} />
            <Route path="/parentbooking" element={<ParentBooking />} />
            <Route
              path="/parentchildaccount"
              element={<ParentChildAccount />}
            />
            <Route path="/parentrecordcard" element={<ParentRecordCard />} />
            <Route path="/parentcenter" element={<ParentCenter />} />
            <Route path="/parentappointment" element={<ParentAppointment />} />
            <Route path="/adminDonations" element={<AdminDonations />} />
            <Route path="/childprofile" element={<ChildProfile />} />
            <Route path="/parentDashboard" element={<ParentDashboard />} />
            <Route path="/vaccinationnavbar" element={<VaccinationNavbar />} />
            <Route
              path="/vaccinationdashboard"
              element={<VaccinationDashboard />}
            />
            <Route
              path="/vaccinationdonation"
              element={<VaccinationDonation />}
            />
            <Route
              path="/vaccinationappointments"
              element={<VaccinationAppointments />}
            />
            <Route path="/vaccinationupdate" element={<VaccinationUpdate />} />
            <Route path="/admincentersginup" element={<AdminCenterSignup />} />
            <Route path="/vaccinationschool" element={<VaccinationSchool />} />
            <Route
              path="/vaccinationvaccines"
              element={<VaccinationVaccines />}
            />
            <Route
              path="/parentnotification"
              element={<ParentNotification />}
            />
            <Route path="/downloadpdfbutton" element={<DownloadPDFButton />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
