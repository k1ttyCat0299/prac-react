import { useEffect, useState } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    // 화면 크기에 따라 디바이스 정보를 update
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      setDeviceInfo({
        isMobile: width < 540,
        isTablet: width >= 540 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // 컴포넌트가 마운트될 때 실행됨
    updateDeviceInfo();

    // 브라우저 창 크기 변경 감지 리스너
    window.addEventListener('resize', updateDeviceInfo);

    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  return deviceInfo;
};

export default useDevice;
