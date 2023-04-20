import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
// import { useState } from "react";
import st from './Navigation.module.scss';

import { useSelector } from "react-redux";
import { getAuthStatus } from "redux/Auth/authSelectors";


const Navigation = () =>{
    const isAuth = useSelector(getAuthStatus)
    
    return(
        <>
        {!isAuth&&<AuthNav />}
        <div className={st.burgerHidden}>
        {isAuth&&<UserNav />}
        </div>
        </>
    )
}

export default Navigation;