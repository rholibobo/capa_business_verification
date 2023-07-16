import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import React from "react";
// import './App.css';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
