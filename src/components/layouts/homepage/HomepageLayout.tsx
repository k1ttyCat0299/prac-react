import { ReactNode } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

interface HomepageLayout {
  children: ReactNode;
}

const HomepageLayout = () => {
  return (
    <div className="homepage-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomepageLayout;
