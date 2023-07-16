import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const savedUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      savedUser();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed out successfully"))
      .catch((err) => console.error(err));
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, userSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
