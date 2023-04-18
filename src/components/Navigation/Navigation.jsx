import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";


const Navigation = () =>{
    return(
        <>Navigation
        <AuthNav />
        {true&&<UserNav />}
        </>
    )
}

export default Navigation;