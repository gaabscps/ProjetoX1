import { Body } from '@/components/Body';
import { Carrossel } from '@/components/Carousel';
import { Element } from 'react-scroll';
import Image from 'next/image';
import mock1 from '@/assets/svg/mockNews1.svg';
import mock2 from '@/assets/svg/mockNews2.svg';
import mock3 from '@/assets/svg/mockNews3.svg';
import mock4 from '@/assets/svg/mockNews4.svg';

export function LastNewsSection() {
  type News = {
    date: string;
    title: string;
    image: JSX.Element;
  };

  const newsMock: News[] = [
    {
      date: '03/05/2023',
      title: 'O jogo League Of Legends 2 agora esta disponível na PLAY X1',
      image: <Image src={mock1} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Valorant agora esta disponível na PLAY X1',
      image: <Image src={mock2} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Overwatch 2 agora esta disponível na PLAY X1',
      image: <Image src={mock3} alt={''} />,
    },
    {
      date: '03/05/2023',
      title:
        'O jogo Counter Strike : Global Offensive agora esta disponível na PLAY X1',
      image: <Image src={mock4} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo League Of Legends 2 agora esta disponível na PLAY X1',
      image: <Image src={mock1} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Valorant agora esta disponível na PLAY X1',
      image: <Image src={mock2} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Overwatch 2 agora esta disponível na PLAY X1',
      image: <Image src={mock3} alt={''} />,
    },
    {
      date: '03/05/2023',
      title:
        'O jogo Counter Strike : Global Offensive agora esta disponível na PLAY X1',
      image: <Image src={mock4} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo League Of Legends 2 agora esta disponível na PLAY X1',
      image: <Image src={mock1} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Valorant agora esta disponível na PLAY X1',
      image: <Image src={mock2} alt={''} />,
    },
    {
      date: '03/05/2023',
      title: 'O jogo Overwatch 2 agora esta disponível na PLAY X1',
      image: <Image src={mock3} alt={''} />,
    },
    {
      date: '03/05/2023',
      title:
        'O jogo Counter Strike : Global Offensive agora esta disponível na PLAY X1',
      image: <Image src={mock4} alt={''} />,
    },
  ];

  const lastNews = newsMock.map((item, index) => (
    <div className="newsContainer" style={{ width: '231px' }} key={index}>
      <div className="simpleStates action-icon">{item.image}</div>
      <div className="d-flex flex-column bannerCardText">
        <span className="text-small-400">{item.date}</span>
        <p className="line-height-150 text-normal-400">{item.title}</p>
      </div>
    </div>
  ));

  return (
    <Element name="news">
      <Body carousel marginBottom="130px" marginTop="60px">
        <Carrossel
          centerButton
          title="Últimas notícias e atualizações"
          items={lastNews}
        />
      </Body>
    </Element>
  );
}
