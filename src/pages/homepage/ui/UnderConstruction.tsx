import useDevice from '@/shared/lib/hooks/useDevice';

const UnderConstruction = () => {
  const { isMobile } = useDevice();

  return (
    <div className="home-container">{String(isMobile)}페이지 준비중입니다.</div>
  );
};

export default UnderConstruction;
