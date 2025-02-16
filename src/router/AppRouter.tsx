import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layouts
import { HomepageLayout, MobileHomepageLayout, SiteLayout } from "../components/layouts";
// pages
import { Home, Login, UnderConstruction } from '../pages/homepage'
import { NoticeList } from "../pages/notice";
import { RiskworkList } from '../pages/riskwork';
import NotFound from '../pages/error/NotFound';
// hooks
import useDevice from '../hooks/useDevice';

const AppRouter = () => {
  const { isMobile } = useDevice();

  const getLayout = (type: 'homepage' | 'site') => {
    switch (type) {
      case 'homepage':
        return isMobile ? <MobileHomepageLayout /> : <HomepageLayout />
      case 'site':
        return <SiteLayout />
      default:
        return null;
    }
  }

  return (
    <Router>
      <Routes>
        {/* Homepage Layout Routes */}
        <Route path='/' element={getLayout('homepage')}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="underConstruction" element={<UnderConstruction />} />
        </Route>

        {/* Site Layout Routes */}
        <Route path='/site' element={getLayout('site')}>
          <Route path="notices" element={<NoticeList />} />
          <Route path="riskworks" element={<RiskworkList />} />
        </Route>

        {/* 404 */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
