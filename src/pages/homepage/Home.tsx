import useDevice from '../../hooks/useDevice';

const Home = () => {
  const { isMobile } = useDevice();

  return <div className="home-container">{String(isMobile)}Home</div>;
};

export default Home;
