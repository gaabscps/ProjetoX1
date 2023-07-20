import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useTabletHook = () => {
  const tablet = useMediaQuery({
    query: '(max-width: 1110px)',
  });

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return isTablet;
};
