import { useEffect } from 'react';

const useScrollLock = (open: boolean): void => {
  useEffect(() => {
    const handleScroll = (event: Event): void => {
      if (open) {
        event.preventDefault();
      }
    };

    if (open) {
      document.addEventListener('scroll', handleScroll, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [open]);
};

export default useScrollLock;
