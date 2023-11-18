'use client'

import { Button } from '../Button';
import Notifications from '@/assets/svg/notifications.svg';
import NotificationsActive from '@/assets/svg/notificationActive.svg';
import Config from '@/assets/svg/config.svg';
import ConfigActive from '@/assets/svg/config-active.svg';
import Image from 'next/image';
import logo from '@/assets/svg/X1_logo_vertical_branco 1.svg';
import NationalityTag from '../NationalityTag';
import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import Link from 'next/link';
import { useState } from 'react';
import { Dashboard } from '@/types/Dashboard';
import { maskBRL } from '@/utils/mask/maskMoney';
import { DropdownNotification } from './components/DropdownNotification';
import { DropdownConfig } from './components/DropdownConfig';


export function Header() {
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

  const profile: Dashboard | null = typeof window !== 'undefined' && window.sessionStorage.getItem('profile') ? JSON.parse(window.sessionStorage.getItem('profile') || '') : null;
  const balance = maskBRL(profile?.Profile.balance || '0')

  return (
    <>
      <header className={'headerModule  '}>
        <nav className={'headerContainer'}>
          <Link href="/dashboard">
            <Image className="headerImage" src={logo} alt="Logo" />
          </Link>
          <div className="d-flex align-items-center header-items-container">
            <div className="headerButtonGroup d-flex">
              <Button
                content="Sacar"
                theme="outline"
                width={mobile ? '70px' : '94px'}
                height="35px"
              />
              <Button
                content="Depositar"
                width={mobile ? '70px' : '94px'}
                height="35px"
              />
            </div>
            {!mobile && <div className="vertical-line" />}
            <div className="d-flex align-items-center header-share ">
              <div className="tag-container">
                <p className="balance">Saldo:</p>
                <p>{balance}</p>
              </div>
              <NationalityTag />
              <div className="d-flex align-items-center header-icons">
                <Image
                  onClick={() => handleNotification()}
                  className="action-icon "
                  style={{ margin: '0 10px' }}
                  src={openNotification ? NotificationsActive : Notifications}
                  alt="notifications icon"
                />
                <DropdownNotification openNotification={openNotification} />
                <Image
                  className="action-icon"
                  onClick={() => handleSettings()}
                  style={{ margin: '0 15px' }}
                  src={openSettings ? ConfigActive : Config}
                  alt="config icon"
                />
                <DropdownConfig openSettings={openSettings} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
