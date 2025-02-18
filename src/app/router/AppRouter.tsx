import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layouts
import { HomepageLayout, SiteLayout } from '@/widgets/layouts';
// pages
import { Home, Login, UnderConstruction } from '@/pages/homepage';
import { NoticeList } from '@/pages/notice';
import { RiskworkList } from '@/pages/riskwork';
import NotFound from '@/pages/error/NotFound';
// hooks
// import useDevice from '@/shared/lib/hooks/useDevice';
// routes
import { routes } from '@/shared/config/routes';

const AppRouter = () => {
  // const { isMobile } = useDevice();

  // const getLayout = (type: 'homepage' | 'site') => {
  //   switch (type) {
  //     case 'homepage':
  //       return isMobile ? <MobileHomepageLayout /> : <HomepageLayout />
  //     case 'site':
  //       return <SiteLayout />
  //     default:
  //       return null;
  //   }
  // }

  return (
    <Router>
      <Routes>
        {/* Homepage Layout Routes */}
        <Route path={routes.homepage.root} element={<HomepageLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.homepage.login} element={<Login />} />
          <Route
            path={routes.homepage.underConstruction}
            element={<UnderConstruction />}
          />
        </Route>

        {/* Site Layout Routes */}
        <Route path={routes.site.root} element={<SiteLayout />}>
          <Route path={routes.site.notices} element={<NoticeList />} />
          <Route path={routes.site.riskworks} element={<RiskworkList />} />
        </Route>

        {/* 404 */}
        <Route path={routes.error.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
