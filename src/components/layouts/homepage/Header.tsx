import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Flex Formular" className="logo-img" />
          <span className="logo-text">Flex formular</span>
        </div>
        <ul className="navbar-links">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/underConstruction'>통합안전관리</Link></li>
          <li><Link to='/underConstruction'>상품소개</Link></li>
          <li><Link to='/underConstruction'>도입문의</Link></li>
        </ul>
        <div className="navbar-login">
          <button className="portal-login">포탈 로그인</button>
          <button className="site-login">현장 로그인</button>
        </div>
      </nav>
    </>
  )
};

export default Header;
