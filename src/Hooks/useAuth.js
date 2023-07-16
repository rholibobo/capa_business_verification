import { useContext } from "react";
import { AuthContext } from "../Context/authContextProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
