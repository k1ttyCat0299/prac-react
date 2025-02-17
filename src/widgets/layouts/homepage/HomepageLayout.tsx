import { Outlet } from 'react-router-dom';
import useDevice from '@/shared/lib/hooks/useDevice';
import Header from '@/widgets/layouts/homepage/HomepageHeader';

const HomepageLayout = () => {
  const { isMobile } = useDevice();

  return (
    <div className="homepage-layout">
      <Header isMobile={isMobile}/>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default HomepageLayout;
