import Footer from "./Footer";
import { useLocation } from "react-router-dom";



const FooterDisplay = () => {
    const location = useLocation();
    const isLoginRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";
    const isResetPasswordRoute = location.pathname === "/reset-password"; 

    if(isLoginRoute || isRegisterRoute || isResetPasswordRoute) {
        return null;
    }

  return (
    <div>
        <Footer />
    </div>
  )
}

export default FooterDisplay