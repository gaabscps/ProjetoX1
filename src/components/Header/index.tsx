import { EmptyImage } from "@/assets/svg/EmptyImage";
import { Button } from "../Button";

export function Header() {
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
      <div className="headerModule">
        <div className="headerContainer">
          <div className="headerItemsContainer">
            <div className="headerLogo">
              <EmptyImage />
            </div>
            {headerList.map((item, key) => (
              <span className="action-icon text-small-400" key={key}>
                {item.name}
              </span>
            ))}
          </div>
          <div className="headerButtonGroup">
            <div className="d-flex">
              <div style={{ marginRight: "5px" }}>
                <Button
                  theme="outline"
                  width="94px"
                  height="35px"
                  content="Entrar"
                />
              </div>
              <div>
                <Button width="94px" height="35px" content={"Criar conta"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
