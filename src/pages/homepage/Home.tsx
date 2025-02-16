import useDevice from '../../hooks/useDevice';

const Home = () => {
  const { isMobile } = useDevice();

  return <div>{String(isMobile)}Home</div>;
};

export default Home;
