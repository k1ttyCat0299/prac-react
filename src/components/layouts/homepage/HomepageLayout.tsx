import { ReactNode } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

interface HomepageLayout {
  children: ReactNode;
}

const HomepageLayout = () => {
  return (
    <div className="homepage-layout">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default HomepageLayout;
