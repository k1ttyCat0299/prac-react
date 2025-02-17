import { useLocation } from 'react-router-dom';

interface LocationState {
  state: {
    isPortalLogin: boolean;
  };
}

const Login = () => {
  const location = useLocation() as LocationState;
  const isPortalLogin = location.state?.isPortalLogin ?? false;

  return (
    <div className="home-container">
      {isPortalLogin ? 'Portal Login' : 'Site Login'}
    </div>
  );
};

export default Login;
