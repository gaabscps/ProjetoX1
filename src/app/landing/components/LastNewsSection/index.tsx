import { EmptyBanner } from "@/assets/svg/EmptyBanner";
import { Body } from "@/components/Body";
import { Carrossel } from "@/components/Carousel";

export function LastNewsSection() {
  type News = {
    date: string;
    title: string;
    image: JSX.Element;
  };

  const newsMock: News[] = [
    {
      date: "03/05/2023",
      title: "O jogo League Of Legends 2 agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title: "O jogo Valorant agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title: "O jogo Overwatch 2 agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title:
        "O jogo Counter Strike : Global Offensive agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title: "O jogo Path of Exile agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },

    {
      date: "03/05/2023",
      title: "O jogo Albion agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title: "O jogo Albion agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
    {
      date: "03/05/2023",
      title: "O jogo DiabloIV agora esta disponível na PLAY X1",
      image: <EmptyBanner />,
    },
  ];

  const lastNews = newsMock.map((item, index) => (
    <div className="newsContainer" style={{ width: "231px" }} key={index}>
      <div className="simpleStates action-icon">{item.image}</div>
      <div className="d-flex flex-column bannerCardText">
        <span className="text-small-400">{item.date}</span>
        <p className="line-height-150 text-normal-400">{item.title}</p>
      </div>
    </div>
  ));

  return (
    <Body carousel marginBottom="130px" marginTop="60px">
      <Carrossel
        centerButton
        title="Últimas notícias e atualizações"
        items={lastNews}
      />
    </Body>
  );
}
