import { EmptyBanner } from "@/assets/svg/EmptyBanner";
import { Body } from "@/components/Body";
import { Carrossel } from "@/components/Carousel";

export function GamesSection() {
  type GamesImage = {
    image: JSX.Element;
  };

  const gamesMock: GamesImage[] = [
    {
      image: <EmptyBanner />,
    },
    {
      image: <EmptyBanner />,
    },
    {
      image: <EmptyBanner />,
    },
    {
      image: <EmptyBanner />,
    },
    {
      image: <EmptyBanner />,
    },
  ];

  const availableGames = gamesMock.map((item) => (
    <div style={{ width: "231px" }} key={1}>
      {item.image}
    </div>
  ));

  return (
    <Body carousel marginBottom="130px">
      <Carrossel title="Jogos disponíveis" items={availableGames} />
    </Body>
  );
}
