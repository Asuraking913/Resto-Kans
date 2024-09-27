import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const auth = localStorage.getItem('access') ? true : false 



    return (
        
        auth ? <Outlet /> : <Navigate to={"/authenticate"}/>
    )

}

export default PrivateRoute