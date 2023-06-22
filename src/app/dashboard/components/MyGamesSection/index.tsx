import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import games3 from "@/assets/svg/mockGame3.svg";
import games1 from "@/assets/svg/mockGame1.svg";
import games2 from "@/assets/svg/mockGame2.svg";
import games4 from "@/assets/svg/mockGame4.svg";
import myGames from "@/assets/svg/myGames.svg";
import Image from "next/image";
import { useState } from "react";
import GameCard from "./GameCard";

interface MyGamesSectionProps {
  modal: {
    setOpenAddGame: (value: boolean) => void;
  };
}

export default function MyGamesSection({ modal }: MyGamesSectionProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const data = [
    {
      logo: games1,
      rank: "Profissional",
      jr: 10,
      v: 1,
      d: 0,
    },
    {
      logo: games2,
      rank: "Intermediário",
      jr: 10,
      v: 1,
      d: 0,
    },
    {
      logo: games3,
      rank: "Iniciante",
      jr: 10,
      v: 1,
      d: 0,
    },
    {
      logo: games4,
      rank: "Iniciante",
      jr: 10,
      v: 1,
      d: 0,
    },
  ];

  return (
    <Body marginBottom="60px">
      <div className="d-flex align-items-center home-title">
        <Image
          style={{ marginRight: "10px" }}
          src={myGames}
          alt="my games icon"
        />
        <p>Meus jogos</p>
      </div>
      <p className="color-black-7 my-games-subtitle">
        Adicione os jogos que você joga e o seu rank em cada um
      </p>
      <div className="d-flex flex-gap-2">
        <Card
          color="#464448"
          onClick={() => modal.setOpenAddGame(true)}
          width="160px"
          height="170px"
          borderRadius="5px"
          theme="dotted"
          content={
            <div className="d-flex flex-column align-items-center justify-content-center h-100 ptb-1 text-center">
              Adicionar Jogo
            </div>
          }
        />
        {data.map((item, index) => (
          <GameCard
            modal={modal}
            key={index}
            data={item}
            openDropdown={openDropdown === index}
            setOpenDropdown={(value) => setOpenDropdown(value ? index : null)}
          />
        ))}
      </div>
    </Body>
  );
}
