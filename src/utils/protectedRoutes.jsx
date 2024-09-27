import React, { useContext } from "react";
import AuthContext from "./provider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const auth = localStorage.getItem('access') ? true : false 



    return (
        
        auth ? <Outlet /> : <Navigate to={"/authenticate"}/>
    )

}

export default PrivateRoute