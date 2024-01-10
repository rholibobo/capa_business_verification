import { useLocation } from "react-router-dom";
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
    <header style={{position: "fixed", top: 0, right: 0, left: 0}}>
        <Navbar />
    </header>
  )
}

export default Header