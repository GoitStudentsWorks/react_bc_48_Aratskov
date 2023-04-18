import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
