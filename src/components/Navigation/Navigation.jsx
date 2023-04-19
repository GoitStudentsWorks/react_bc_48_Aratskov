import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import { useState } from "react";


const Navigation = () =>{
    const [isAuth] = useState(true);
    // setIsAuth(false)
    return(
        <>
        {!isAuth&&<AuthNav />}
        {isAuth&&<UserNav />}
        </>
    )
}

export default Navigation;