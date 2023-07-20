import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '@/assets/svg/X1_logo_vertical_branco 1.svg';
import { Button } from '@/components/Button';

interface HeaderProps {
  setOpenLogin: (open: boolean) => void;
  setOpenRegister: (open: boolean) => void;
}

export function Header({ setOpenLogin, setOpenRegister }: HeaderProps) {
  const desktop = useMediaQuery({
    query: '(min-width: 1110px)',
  });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 448) {
        setIsOpacity(true);
      } else {
        setIsOpacity(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerList = [
    {
      name: 'Início',
      link: 'home',
    },
    {
      name: 'Últimas notícias e atualizações',
      link: 'news',
    },
    {
      name: 'Jogos disponíveis',
      link: 'games',
    },
    {
      name: 'Funcionalidades',
      link: 'features',
    },
    {
      name: 'Como jogar',
      link: 'howToPlay',
    },
    {
      name: 'FAQ',
      link: 'faq',
    },
  ];

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  return (
    <>
      {!isDesktop && (
        <div onClick={() => setIsOpen(!isOpen)} className="closeButton">
          <div className="hamburg" />
          <div className="hamburg" />
          <div className="hamburg" />
        </div>
      )}
      <header
        onClick={() => isOpen && setIsOpen(false)}
        className={`landing-headerModule ${
          isOpacity && isDesktop ? 'landing-header-opacity' : ''
        } ${
          !isDesktop && !isOpen
            ? 'landing-headerOpacityOff'
            : 'landing-headerOpacityOn'
        } `}
      >
        <nav
          className={`landing-headerContainer ${
            !isDesktop && !isOpen
              ? 'landing-headerMobileOff'
              : 'landing-headerMobileOn'
          } `}
        >
          <ul className="landing-headerItemsContainer">
            <li className="landing-headerLogo">
              <Image src={logo} alt="Logo" />
            </li>
            {headerList.map((item, key) => (
              <Link
                key={key}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-100} // Ajuste opcional de compensação para o cabeçalho
              >
                <li className="action-icon text-small-400 landing-headerItem">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="landing-headerButtonGroup d-flex">
            <Button
              onClick={() => setOpenLogin(true)}
              content="Entrar"
              theme="outline"
              width="94px"
              height="35px"
            />
            <Button
              onClick={() => setOpenRegister(true)}
              content="Criar conta"
              width="94px"
              height="35px"
            />
          </div>
        </nav>
      </header>
    </>
  );
}
