import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { Dashboard } from '@/types/Dashboard';
import { maskBRL } from '@/utils/mask/maskMoney';
import { useState } from 'react';

export const useHeader = () => {
    const mobile = useMobileHook();

    const [openNotification, setOpenNotification] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const handleNotification = () => {
        if (openSettings) {
            setOpenSettings(!openSettings);
        }
        setOpenNotification(!openNotification);
    };

    const handleSettings = () => {
        if (openNotification) {
            setOpenNotification(!openNotification);
        }
        setOpenSettings(!openSettings);
    };

    const logOut = () => {
        document.cookie.split(';').forEach((c) => {
            document.cookie = c
                .replace(/^ +/, '')
                .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
        }
        );
        window.location.href = '/';
    }

    const profile: Dashboard | null = typeof window !== 'undefined' && window.sessionStorage.getItem('profile') ? JSON.parse(window.sessionStorage.getItem('profile') || '') : null;
    const balance = maskBRL(profile?.Profile.balance || '0')


    return {
        handleNotification,
        handleSettings,
        logOut,
        mobile,
        openNotification,
        openSettings,
        profile,
        balance
    };
};

