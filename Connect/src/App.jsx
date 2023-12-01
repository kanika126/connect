import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contribute from "./pages/Contribute";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Resumecard from "./components/Resumecard";
import Workcard from "./components/Workcard";
import Collegecard from "./components/Collegecard";
import {
  Routes,
  Route,
} from "react-router-dom";  

function App() {
  return (
    <div className="mt-2">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/contribute" element={<Contribute/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/resumecard" element={<Resumecard/>} />
        <Route path="/workcard" element={<Workcard/>} />
        <Route path="/collegecard" element={<Collegecard/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
