import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



const Header = () => {
    const location = useLocation();
    const isLoginRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";

    if(isLoginRoute || isRegisterRoute) {
        return null;
    }
  return (
    <header style={{position: "sticky"}}>
        <Navbar />
    </header>
  )
}

export default Header