import { Body } from '@/components/Body';
import { Carrossel } from '@/components/Carousel';
import { News } from '@/types/LandingNews';
import { useState } from 'react';
import { Element } from 'react-scroll';
import Image from 'next/image';


interface LastNewsProps {
  setOpen: (open: boolean) => void;
  news: News[];
  setSelectedNewsIndex: (index: number) => void;
  setIsModalOpen: (open: boolean) => void;
}

export function LastNewsSection({ setOpen, news, setSelectedNewsIndex, setIsModalOpen }: LastNewsProps) {



  const handleNewsClick = (index: number) => {
    setSelectedNewsIndex(index);
    setIsModalOpen(true);
  };

  const lastNews = news.map((item, index) => (
    <>
      <div onClick={() => handleNewsClick(index)}
        className="newsContainer"
        style={{ width: '231px' }}
        key={index}>
        <div className="simpleStates action-icon">
          <Image width={231} height={126} style={{ objectFit: 'cover' }} src={item.photoUrl} alt={''} />
        </div>
        <div className="d-flex flex-column bannerCardText">
          <span className="text-small-400">{item.createdAt}</span>
          <p className="line-height-150 text-normal-400">{item.tittle}</p>
        </div>
      </div>
    </>
  ));

  return (
    <Element name="news">
      <Body carousel marginBottom="130px" marginTop="60px">
        {lastNews && lastNews.length > 0 &&
          <Carrossel
            centerButton
            title="Últimas notícias e atualizações"
            items={lastNews}
          />
        }
      </Body>
    </Element>
  );
}
