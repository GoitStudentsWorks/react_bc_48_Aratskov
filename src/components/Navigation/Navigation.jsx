import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
// import { useState } from "react";

import { useSelector } from "react-redux";
import { getAuthStatus } from "redux/Auth/authSelectors";


const Navigation = () =>{
    const isAuth = useSelector(getAuthStatus)
    // const [isAuth] = useState(true);
    // setIsAuth(false)

    return(
        <>
            {/* <button style={isAuth?{backgroundColor: "green"}:{backgroundColor: "#ffffff"}} onClick={()=>setIsAuth(!isAuth)}>ToogleAuth</button> */}

        {!isAuth&&<AuthNav />}
        {isAuth&&<UserNav />}
        </>
    )
}

export default Navigation;