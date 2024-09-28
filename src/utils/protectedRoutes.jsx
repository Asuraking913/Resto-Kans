import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./provider";

const PrivateRoute = () => {

    // const auth = localStorage.getItem('access') ? true : false 
    const { isAuthenticated} = useContext(AuthContext)



    return (
        
        isAuthenticated ? <Outlet /> : <Navigate to={"/authenticate"}/>
    )

}

export default PrivateRoute