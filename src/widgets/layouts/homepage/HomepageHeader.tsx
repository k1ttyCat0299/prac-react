import { Link, useNavigate } from 'react-router-dom';
import ffLogo from '@/assets/icon_logo_ff.svg';

interface HomepageHeaderProps {
  isMobile: boolean;
}

const Header = ({ isMobile }: HomepageHeaderProps) => {
  const navigate = useNavigate();

  const handleLogin = (isPortalLogin: boolean) => {
    navigate('/login', { state: { isPortalLogin } });
  };

  // Mobile Header 임시
  if (isMobile) {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={ffLogo} alt="Flex Formular" className="logo-img" />
          </div>
          <div className="navbar-login">
            <button className="portal-login" onClick={() => handleLogin(true)}>
              포탈 로그인
            </button>
            <button className="site-login" onClick={() => handleLogin(false)}>
              현장 로그인
            </button>
          </div>
        </nav>
      </header>
    )
  }

  // Desktop Header 임시
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={ffLogo} alt="Flex Formular" className="logo-img" />
          </div>
          <ul className="navbar-menus">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/underConstruction">통합안전관리</Link>
            </li>
            <li>
              <Link to="/underConstruction">상품소개</Link>
            </li>
            <li>
              <Link to="/underConstruction">도입문의</Link>
            </li>
          </ul>
          <div className="navbar-login">
            <button className="portal-login" onClick={() => handleLogin(true)}>
              포탈 로그인
            </button>
            <button className="site-login" onClick={() => handleLogin(false)}>
              현장 로그인
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
