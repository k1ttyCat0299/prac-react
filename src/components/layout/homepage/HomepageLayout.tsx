import { ReactNode } from 'react';
import Header from './Header';

interface HomepageLayout {
  children: ReactNode;
}

const HomepageLayout = ({ children }: HomepageLayout) => {
  return (
    <div className="homepage-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default HomepageLayout;
