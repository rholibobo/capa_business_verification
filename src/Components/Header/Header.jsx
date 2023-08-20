import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



const Header = () => {
    const location = useLocation();
    const isLoginRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";
    const isResetPasswordRoute = location.pathname === "/reset-password";

    if(isLoginRoute || isRegisterRoute || isResetPasswordRoute) {
        return null;
    }
  return (
    <header style={{position: "sticky"}}>
        <Navbar />
    </header>
  )
}

export default Header