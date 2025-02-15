import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomepageLayout from '../components/layout/homepage/HomepageLayout';
import Home from '../pages/homepage/Home';
import UnderContruction from '../pages/homepage/UnderConstruction';
import SiteLayout from '../components/layout/site/SiteLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/underConstruction" element={<UnderContruction />} />
        </Route>

        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/underConstruction" element={<UnderContruction />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
