import { EmptyImage } from "@/assets/svg/EmptyImage";
import { Button } from "../Button";
import { useEffect, useState } from "react";

export function Header() {
  const [isOpacity, setIsOpacity] = useState(false);

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerList = [
    {
      name: "Início",
      link: "/",
    },
    {
      name: "Últimas notícias e atualizações",
      link: "/",
    },
    {
      name: "Jogos disponíveis",
      link: "/",
    },
    {
      name: "Funcionalidades",
      link: "/",
    },
    {
      name: "Como jogar",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
  ];

  return (
    <>
      <header className={`headerModule ${isOpacity && "header-opacity"}`}>
        <nav className="headerContainer">
          <ul className="headerItemsContainer">
            <li className="headerLogo">
              <EmptyImage />
            </li>
            {headerList.map((item, key) => (
              <li className="action-icon text-small-400 headerItem" key={key}>
                {item.name}
              </li>
            ))}
          </ul>
          <div className="headerButtonGroup d-flex">
            <Button
              content="Entrar"
              theme="outline"
              width="94px"
              height="35px"
            />
            <Button content="Criar conta" width="94px" height="35px" />
          </div>
        </nav>
      </header>
    </>
  );
}
