import { EmptyUser } from "@/assets/svg/EmptyUser";
import { Game } from "@/assets/svg/Game";
import { Trending } from "@/assets/svg/Trending";
import { Body } from "@/components/Body";

export function StatsSection() {
  type Content = {
    title: string;
    icon?: JSX.Element;
    description?: string;
  };

  const content: Content[] = [
    {
      title: "Confira os resultados da PLAY X1 e faça parte você também",
    },
    {
      title: "+2 mil",
      icon: <EmptyUser />,
      description: "Usuários ativos",
    },
    {
      title: "+10",
      icon: <Game />,
      description: "Jogos na plataforma",
    },
    {
      title: "+R$ 2 milhões",
      icon: <Trending />,
      description: "Movimentados na plataforma",
    },
  ];

  return (
    <>
      <Body className="statsSectionModule ">
        <div className="d-flex align-items-center stats-flex statsSectionContainer justify-content-between">
          {content.map((item, index) =>
            !item.icon ? (
              <p key={index} className="text-normal-400 line-height-150">
                {item.title}
              </p>
            ) : (
              <div key={index} className="d-flex statsItem">
                <div className="d-flex align-items-center statsIcon">
                  {item.icon}
                </div>
                <div className="d-flex flex-column statsItem">
                  <h6 className="statsTitle h6-400">{item.title}</h6>
                  <p className="statsDescription text-normal-400">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </Body>
    </>
  );
}
