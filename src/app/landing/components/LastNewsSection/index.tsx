import { Body } from '@/components/Body';
import { Carrossel } from '@/components/Carousel';
import { News } from '@/types/LandingNews';
import { useState } from 'react';
import { Element } from 'react-scroll';
import Image from 'next/image';


interface LastNewsProps {
  setOpen: (open: boolean) => void;
  newsMock: News[];
  setSelectedNewsIndex: (index: number) => void;
  setIsModalOpen: (open: boolean) => void;
}

export function LastNewsSection({ setOpen, newsMock, setSelectedNewsIndex, setIsModalOpen }: LastNewsProps) {



  const handleNewsClick = (index: number) => {
    setSelectedNewsIndex(index);
    setIsModalOpen(true);
  };

  const lastNews = newsMock.map((item, index) => (
    <>
      <div onClick={() => handleNewsClick(index)}
        className="newsContainer"
        style={{ width: '231px' }}
        key={index}>
        <div className="simpleStates action-icon">
          <Image src={item.image} alt={''} />
        </div>
        <div className="d-flex flex-column bannerCardText">
          <span className="text-small-400">{item.date}</span>
          <p className="line-height-150 text-normal-400">{item.title}</p>
        </div>
      </div>
    </>
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
