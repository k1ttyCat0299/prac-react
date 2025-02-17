import { Outlet } from 'react-router-dom';

const SiteLayout = () => {
  return (
    <div className="siteService-container">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SiteLayout;
