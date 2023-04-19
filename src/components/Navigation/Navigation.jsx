import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import { useState } from "react";


const Navigation = ({isAuth}) =>{
    // const [isAuth,setIsAuth] = useState(true);
    // setIsAuth(auth)
    return(
        <>
            {/* <button style={isAuth?{backgroundColor: "green"}:{backgroundColor: "#ffffff"}} onClick={()=>setIsAuth(!isAuth)}>ToogleAuth</button> */}

        {!isAuth&&<AuthNav />}
        {isAuth&&<UserNav />}
        </>
    )
}

export default Navigation;