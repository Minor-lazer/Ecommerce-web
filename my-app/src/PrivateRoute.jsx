import { Route, Navigate} from "react-router-dom";
import {useAuth} from "./Context/AuthContext";

export  function PrivateRoute ({path,...props})
{
   const {isLogin} = useAuth();
    
  return isLogin ? 
  (<Route {...props}  path = {path}/>) : 
  (<Navigate state ={{from:path}}  replace to ="/login"/>)
}
