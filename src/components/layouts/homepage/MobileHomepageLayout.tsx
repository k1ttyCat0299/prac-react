import { Outlet } from 'react-router-dom';

const MobileHomepageLayout = () => {
  return (
    <div className="homepage-layout">
      <div>Mobile!!</div>
      <main className="content-container">
        <Outlet />
      </main>
    </div>
  );
};

export default MobileHomepageLayout;
