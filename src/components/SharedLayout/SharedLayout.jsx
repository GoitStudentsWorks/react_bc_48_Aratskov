import Header from 'components/Header/Header';
import ModalBurger from 'components/ModalBurger/ModalBurger';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const burg = useSelector(state => state.burger);
  return (
    <>
      <Header />
      <main>
        {!burg && <Outlet />}
        {burg && <ModalBurger />}
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
