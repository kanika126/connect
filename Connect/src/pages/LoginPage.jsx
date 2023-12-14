import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {jwtDecode }from 'jwt-decode'; 
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInButton, setSignInButton] = useState(false);
  const [registerAlumniOption, setRegisterAlumniOption] = useState(false);
  const [OtpSent, setOtpSent] = useState(false);
  const [Otp, setOtp] = useState("");
  const navigate = useNavigate();
  const host = "http://localhost:5001";
  const {login} = useContext(AuthContext);

  const handleLoginOptionClick = (option) => {
    if (option === "Register") {
      setRegisterAlumniOption(true);
    } else {
      setRegisterAlumniOption(false);
      setOtpSent(false);
    }
    setSelectedOption(option);
  };

  const handleSignIn = () => {
    setSignInButton(true);
  };

  const handleAdminLogin = async (e) => {
    console.log("admin tried");
    // // Handle admin login logic here
    if (email && password) {
      const response = await fetch(`${host}/api/auth/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const json = await response.json();
      console.log(json);
    
      if (json.success) {
        
        localStorage.setItem("token",json.authtoken)
        console.log(json.authtoken)
        let decodedToken = jwtDecode(json.authtoken); // Decode the JWT token
        let userData = {
          role:decodedToken['role'],
          id: decodedToken['id'],
          username:decodedToken['username'],
        };
        console.log(userData)
        login(userData);
        navigate('/admin');
      } else {
        alert('Login Error');
      }
    } else {
      alert("Please fill in both email and password fields.");
    }
  };

  const handleAlumniLogin = async () => {
    if (email && password) {
      const response = await fetch(`${host}/api/auth/alumni`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const json = await response.json();
      console.log(json);
    
      if (json.success) {
        
        localStorage.setItem("token",json.authtoken)
        console.log(json.authtoken)
        const decodedToken = jwtDecode(json.authtoken); // Decode the JWT token
        const userData = {
          role:decodedToken['role'],
          id: decodedToken['id'],
          username:decodedToken['username']
        };
        console.log(userData)
        login(userData);
        navigate('/contribute');
      } else {
        alert('Login Error');
      }
    } else {
      alert("Please fill in both email and password fields.");
    }
  };
  

  

  const handleAlumniForm = () => {
    if (email) {
      console.log(email);
    }
  };

  const handleSendOTP = async () => {
    console.log(email);
    if (email) {
      const response = await fetch(`${host}/api/auth/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_id: email }),
      });

      const json = await response.json();
      if (json.success) {
        setOtpSent(true);
      } else {
        alert("Failed to send OTP.");
      }
    } else {
      alert("Please enter an email address.");
    }
  };
  const handleVerifyOTP = async () => {
    console.log(Otp);
    if (email && Otp) {
      const response = await fetch(`${host}/api/auth/verifyOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, enteredOTP: Otp }),
      });

      const json = await response.json();
      if (json.success) {
        alert("OTP verified successfully.");
        navigate("/register", { state: { email } }); 
        // Redirect to the appropriate page after OTP verification
      } else {
        alert("Invalid OTP.");
      }
    } else {
      alert("Please enter an email and OTP.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signInButton) {
      console.log(selectedOption);
      switch (selectedOption) {
        case "admin":
          handleAdminLogin();
          break;
        case "Alumni":
          handleAlumniLogin();
          break;
        case "Register":
          handleAlumniForm();
          break;
        default:
          alert("Please select an option: Admin, Department, Professor.");
          break;
      }
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center relative">
     
      <div className="place-content-center relative z-10 flex flex-col justify-center">
        <form
          className="max-w-[700px] w-full mx-auto bg-white p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center">
           
          </div>
          <p className="text-gray-600 text-xs mt-2">For Alumnis:</p>
          <div>
            <button
              className="w-full my-2 py-2 bg-[#6366f1] shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/40 text-white font-semibold rounded-lg"
              onClick={() => handleLoginOptionClick("Register")}
            >
              Register Alumni
            </button>
          </div>
          {!registerAlumniOption ? (
          <>
          <hr className="border-2 border-[#7d7f7f]" />
          <p className="text-gray-600 text-xs mt-2">Log in as:</p>
          <div className="flex-auto mt-1">
            <button
              className={`px-4 py-2 rounded-full cursor-pointer border ${
                selectedOption === "admin"
                  ? "bg-[#6366f1] text-white"
                  : "border-[#6366f1] hover:bg-[#6366f1] hover:text-white"
              } outline-none focus:border-[#6366f1]`}
              onClick={() => handleLoginOptionClick("admin")}
            >
              Admin
            </button>
            <button
              className={`px-4 py-2 rounded-full cursor-pointer border ${
                selectedOption === "Alumni"
                  ? "bg-[#6366f1] text-white"
                  : "border-[#6366f1] hover:bg-[#6366f1] hover:text-white mx-1"
              } outline-none focus:border-[#6366f1]`}
              onClick={() => handleLoginOptionClick("Alumni")}
            >
              Alumni
            </button>
          </div>
          </>):(null)}
          <div className="justify-center items-center"></div>

          {!OtpSent ? (
            <div className="flex flex-col text-black py-2">
              <label>Email Id</label>
              <input
                className="text-black rounded-lg bg-white mt-2 p-2 border-2 border-gray-500 focus:bg-gray-200 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col text-black py-2">
              <label>Enter Otp</label>
              <input
                className="text-black rounded-lg bg-white mt-2 p-2 border-2 border-gray-500 focus:bg-gray-200 focus:outline-none"
                type="Otp"
                value={Otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}

          {!registerAlumniOption ? (
            <>
              <div className="flex flex-col text-black py-2">
                <label>Password</label>
                <input
                  className="text-black rounded-lg bg-white mt-2 p-2 border-2 border-gray-500 focus:bg-gray-200 focus:outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between text-gray-600 py-2">
                <p>Forgot Password?</p>
              </div>
              <button
                type="submit"
                className="w-full my-5 py-2 bg-[#6366f1] shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/40 text-white font-semibold rounded-lg"
                onClick={handleSignIn}
                disabled={!email || !password} 
              >
                Sign In
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="w-full my-5 py-2 bg-[#6366f1] shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/40 text-white font-semibold rounded-lg"
              onClick={OtpSent ? handleVerifyOTP : handleSendOTP}
            >
              {OtpSent ? "Verify OTP" : "Send OTP"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;