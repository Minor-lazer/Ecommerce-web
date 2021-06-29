import React from "react";
import { createContext,useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const user = 
{
    username:"Masum",
    passWord:"Jenny",
};

export const AuthProvider = ({children}) => 
{
    const [isLogin,setLogin] = useState (false);
    
    const isLoginHandler = (username,password) =>
    {
        if (username === user.password && password === user.password)
        {
            setLogin(true);
        }
    }
     
    return (
    <AuthContext.Provider value={{ isLogin, isLoginHandler }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () =>
{
   return useContext(AuthContext);
};

