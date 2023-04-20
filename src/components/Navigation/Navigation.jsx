import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
// import { useState } from "react";

import { useSelector } from "react-redux";
import { getAuthStatus } from "redux/Auth/authSelectors";


const Navigation = () =>{
    const isAuth = useSelector(getAuthStatus)
    
    return(
        <>
        {!isAuth&&<AuthNav />}
        {isAuth&&<UserNav />}
        </>
    )
}

export default Navigation;