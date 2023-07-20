import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useSmallMobileHook = () => {
  const smallMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    setIsSmallMobile(smallMobile);
  }, [smallMobile]);

  return isSmallMobile;
};
