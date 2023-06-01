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
  ];

  const lastNews = newsMock.map((item, index) => (
    <div style={{ width: "231px" }} key={index}>
      {item.image}
      <div className="d-flex flex-column bannerCardText">
        <span>{item.date}</span>
        <h6>{item.title}</h6>
      </div>
    </div>
  ));

  return (
    <Body className="mb-5">
      <Carrossel title="Últimas notícias e atualizações" items={lastNews} />
    </Body>
  );
}
