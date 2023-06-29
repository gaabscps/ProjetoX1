import { EmptyBanner } from '@/assets/svg/EmptyBanner';
import { Body } from '@/components/Body';
import { Carrossel } from '@/components/Carousel';
import { Element } from 'react-scroll';
import Image from 'next/image';
import mock1 from '@/assets/svg/mockGame1.svg';
import mock2 from '@/assets/svg/mockGame2.svg';
import mock3 from '@/assets/svg/mockGame3.svg';
import mock4 from '@/assets/svg/mockGame4.svg';

export function GamesSection() {
  type GamesImage = {
    image: JSX.Element;
  };

  const gamesMock: GamesImage[] = [
    {
      image: <Image src={mock1} alt="" />,
    },
    {
      image: <Image src={mock2} alt="" />,
    },
    {
      image: <Image src={mock3} alt="" />,
    },
    {
      image: <Image src={mock4} alt="" />,
    },
    {
      image: <Image src={mock1} alt="" />,
    },
  ];

  const availableGames = gamesMock.map((item) => (
    <div
      className="h-100 d-flex justify-content-center align-items-center games-carousel"
      style={{ width: '231px', height: '126px' }}
      key={1}
    >
      {item.image}
    </div>
  ));

  return (
    <Element name="games">
      <Body carousel marginBottom="130px">
        <Carrossel isBanner title="Jogos disponíveis" items={availableGames} />
      </Body>
    </Element>
  );
}
