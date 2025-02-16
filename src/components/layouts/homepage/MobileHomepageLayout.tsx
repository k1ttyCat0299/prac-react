import { Outlet } from 'react-router-dom';

const MobileHomepageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>Mobile!!</div>
      <main className="flex-1 px-4 py-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MobileHomepageLayout;