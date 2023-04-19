import st from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserBar from 'components/UserBar/UserBar';
import { useState } from 'react';

const Header = () => {
  const [isAuth] = useState(true);
  // setIsAuth(false);
  return (
    <header className={st.header}>
    <div className="container">
    <div className={st.wrapper}>
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
    </div>
    </div>
    </header>
  );
};

export default Header;
