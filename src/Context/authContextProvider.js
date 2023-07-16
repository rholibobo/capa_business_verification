import { useEffect, useState, createContext } from "react";

const AuthContext = createContext({})

function AuthContextProvider({children}) {
   
    return (
        <AuthContext.Provider
            value={{}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext};