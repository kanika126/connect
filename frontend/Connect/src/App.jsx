
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contribute from "./pages/Contribute";
import Footer from "./components/Footer";
import {
  Routes,
  Route,
} from "react-router-dom";  

function App() {
  return (
    <div classname="home">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/contribute" element={<Contribute/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
