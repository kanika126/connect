import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contribute from "./pages/Contribute";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Resumecard from "./components/Resumecard";
import Workcard from "./components/WorkExpPage";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import AuthState from "./context/AuthState";
import RegisterPage from './pages/RegisterPage';
import ApprovePage from './components/ApprovalWrapperPage';
import ClgExpPage from "./components/ClgExpPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthState>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/" element={<AdminPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resumecard" element={<Resumecard />} />
            <Route path="/workexp" element={<Workcard />} />
            <Route path="/collegeexp" element={<ClgExpPage/>} />
            <Route path="/approve/*" element={<ApprovePage />} />
          </Routes>
        </div>
        <Footer/>
      </AuthState>
    </div>
  );
}

export default App;
