import st from './Header.module.css';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserBar from 'components/UserBar/UserBar';

const Header = () => {
  return (
    <header className={st.list}>
      <h1>HEADER</h1>
      <Logo />
      <Navigation />
      {true && <UserBar />}
    </header>
  );
};

export default Header;
