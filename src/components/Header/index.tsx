import { Button } from '../Button';
import Notifications from '@/assets/svg/notifications.svg';
import NotificationsActive from '@/assets/svg/notificationActive.svg';
import Config from '@/assets/svg/config.svg';

import Image from 'next/image';
import logo from '@/assets/svg/X1_logo_vertical_branco 1.svg';
import NationalityTag from '../NationalityTag';
import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import { useMediaQuery } from 'react-responsive';

interface HeaderProps {
  setOpenLogin: (open: boolean) => void;
  setOpenRegister: (open: boolean) => void;
}

export function Header({ setOpenLogin, setOpenRegister }: HeaderProps) {
  const mobile = useMobileHook();
  const is565 = useMediaQuery({ maxWidth: 565 });

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleNotification = () => {
    setOpenDropdown(!openDropdown);
  };

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
                onClick={() => setOpenLogin(true)}
                content="Sacar"
                theme="outline"
                width={mobile ? '70px' : '94px'}
                height="35px"
              />
              <Button
                onClick={() => setOpenRegister(true)}
                content="Depositar"
                width={mobile ? '70px' : '94px'}
                height="35px"
              />
            </div>
            {!mobile && <div className="vertical-line" />}
            <div className="d-flex align-items-center header-share ">
              <div className="tag-container">
                <p className="balance">Saldo:</p>
                <p>R$100,00</p>
              </div>
              <NationalityTag />
              <div className="d-flex align-items-center header-icons">
                <Image
                  onClick={() => handleNotification()}
                  className="action-icon "
                  style={{ margin: '0 10px' }}
                  src={openDropdown ? NotificationsActive : Notifications}
                  alt="notifications icon"
                />
                <DropdownMenu
                  open={openDropdown}
                  list={false}
                  background="#3E3B3F"
                  top={is565 ? 28 : 40}
                  right={60}
                  width="239px"
                  header={
                    <>
                      <div
                        style={{ padding: '15px 10px' }}
                        className="d-flex flex-gap-1 justify-content-between text-extra-small-400 w-100"
                      >
                        <p style={{ whiteSpace: 'nowrap' }}>Notificações</p>
                        <p
                          className="color-black-7 action-icon"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          Limpar tudo
                        </p>
                      </div>
                    </>
                  }
                  tabs={[
                    {
                      content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400 ">
                          <div
                            className="d-flex flex-column"
                            style={{ width: '175px', gap: '5px' }}
                          >
                            <p className="line-height-150">
                              O valor de R$ 200,00 foi depositado em sua conta
                            </p>
                            <p className="color-black-7 line-height-150">
                              10/03 • 10:32
                            </p>
                          </div>
                          <div className="color-black-7 ">x</div>
                        </div>
                      ),
                    },
                    {
                      content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                          <div
                            className="d-flex flex-column"
                            style={{ width: '175px', gap: '5px' }}
                          >
                            <p className="line-height-150">
                              O valor de R$ 200,00 foi depositado em sua conta
                            </p>
                            <p className="color-black-7 line-height-150">
                              10/03 • 10:32
                            </p>
                          </div>
                          <div className="color-black-7 ">x</div>
                        </div>
                      ),
                    },
                    {
                      content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                          <div
                            className="d-flex flex-column"
                            style={{ width: '175px', gap: '5px' }}
                          >
                            <p className="line-height-150">
                              O valor de R$ 200,00 foi depositado em sua conta
                            </p>
                            <p className="color-black-7 line-height-150">
                              10/03 • 10:32
                            </p>
                          </div>
                          <div className="color-black-7 ">x</div>
                        </div>
                      ),
                    },
                    {
                      content: (
                        <div className="d-flex w-100 justify-content-between text-extra-small-400">
                          <div
                            className="d-flex flex-column"
                            style={{ width: '175px', gap: '5px' }}
                          >
                            <p className="line-height-150">
                              O valor de R$ 200,00 foi depositado em sua conta
                            </p>
                            <p className="color-black-7 line-height-150">
                              10/03 • 10:32
                            </p>
                          </div>
                          <div className="color-black-7 ">x</div>
                        </div>
                      ),
                    },
                  ]}
                />
                <Image
                  className="action-icon"
                  style={{ margin: '0 15px' }}
                  src={Config}
                  alt="notifications icon"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
