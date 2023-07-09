import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Header/Navbar";
// import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
