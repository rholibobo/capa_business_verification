import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Verification from "./Pages/BusinessVerfication/Verification";
import Footer from "./Components/Footer/Footer";

// import './App.css';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/verification" element={<Verification />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
