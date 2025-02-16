import Gnb from './Gnb';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const SiteLayout = () => {
  return (
    <div className="siteService-container">
      <div className="gnb">
        <Gnb />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SiteLayout;
