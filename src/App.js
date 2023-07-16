import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Header/Navbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
// import './App.css';

function App() {
  
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
      <Route
        render={({ location }) => {
          // Check if the current location matches the login or register route
          const hideNavbar = ['/login', '/register'].includes(location.pathname);

          // Render the Navbar component conditionally
          return !hideNavbar && <Navbar />;
        }}
      />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
