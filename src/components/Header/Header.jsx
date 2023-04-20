import st from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserBar from 'components/UserBar/UserBar';
import { useState } from 'react';

const Header = () => {
  // const [isAuth,setIsAuth] = useState(true);
  // setIsAuth(false);
  return (
    <header className={st.header}>
    <div className="container">
    <div className={st.wrapper}>
    <button style={isAuth?{backgroundColor: "green"}:{backgroundColor: "#ffffff"}} onClick={()=>setIsAuth(!isAuth)}>ToogleAuth</button>
    {isAuth&&(<>
      <Navigation isAuth={isAuth}/>
      <Logo />
      <UserBar />
      </>
    )}
    {!isAuth&&(<>
      <Logo />
      <Navigation auth={isAuth}/>
      
    </>)}
    </div>
    </div>
    </header>
  );
};

export default Header;
