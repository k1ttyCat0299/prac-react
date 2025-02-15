import { ReactNode } from 'react';
import Gnb from './Gnb';
import Footer from './Footer';

interface SiteLayout {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayout) => {
  return (
    <div className="siteService-container">
      <div className="gnb">
        <Gnb />
      </div>
      <div className="content">
        <main>{children}</main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SiteLayout;
