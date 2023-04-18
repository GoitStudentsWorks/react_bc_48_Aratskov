import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loadming..</div>}>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Suspense>
    </>
  );
};

export default SharedLayout;
