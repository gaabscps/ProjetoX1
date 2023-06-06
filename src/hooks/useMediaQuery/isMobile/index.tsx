import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useMobileHook = () => {
  const mobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};
