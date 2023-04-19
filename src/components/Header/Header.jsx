import st from './Header.module.css';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserBar from 'components/UserBar/UserBar';
import { useState } from 'react';

const Header = () => {
  const [isAuth] = useState(true);
  // setIsAuth(false);
  return (
    <header className={st.header}>
    {isAuth&&(<>
      <Navigation />
      <Logo />
      <UserBar />
      </>
    )}
    {!isAuth&&(<>
      <Logo />
      <Navigation />
      
    </>)}
      
    </header>
  );
};

export default Header;
