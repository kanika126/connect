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
import ProtectedRoute from "./ProtectedRoutes";
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
            <Route
                element={
                  <ProtectedRoute
                    element={<AdminPage />}
                    allowedRoles={['admin']}
                  />
                }
                path="/admin/*"
              />
            {/* <Route path="/admin/" element={<AdminPage />} /> */}
            <Route path="/explore" element={<Explore />} />
            <Route
                element={
                  <ProtectedRoute
                    element={<Contribute />}
                    allowedRoles={['alumni']}
                  />
                }
                path="/contribute/*"
              />
            {/* <Route path="/contribute" element={<Contribute />} /> */}
            <Route
                element={
                  <ProtectedRoute
                    element={<Profile />}
                    allowedRoles={['alumni']}
                  />
                }
                path="/profile"
              />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resumecard" element={<Resumecard />} />
            <Route path="/workexp" element={<Workcard />} />
            <Route path="/collegeexp" element={<ClgExpPage/>} />
            <Route
                element={
                  <ProtectedRoute
                    element={<ApprovePage />}
                    allowedRoles={['admin']}
                  />
                }
                path="/approve/*"
              />
            {/* <Route path="/approve/*" element={<ApprovePage />} /> */}
          </Routes>
        </div>
        <Footer/>
      </AuthState>
    </div>
  );
}

export default App;
