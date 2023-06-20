import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import valorant from "@/assets/svg/mockGame3.svg";
import myGames from "@/assets/svg/myGames.svg";
import Image from "next/image";

interface MyGamesSectionProps {
  modal: {
    setOpenAddGame: (value: boolean) => void;
  };
}

export default function MyGamesSection({ modal }: MyGamesSectionProps) {
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
        <Card
          borderRadius="5px"
          color="#3E3B3F"
          width="160px"
          height="170px"
          theme="outline"
          content={
            <div className="my-games-card-container">
              <Image
                src={valorant}
                alt="valorant logo"
                className="my-games-image"
              />
              <div className="d-flex flex-column align-items-center">
                <span style={{ marginBottom: "5px" }}>Rank</span>
                <span>Profissional</span>
              </div>
              <div className="d-flex justify-content-between w-100">
                <p className="text-small-400">JR: 10</p>
                <p className="text-small-400">V: 1</p>
                <p className="text-small-400">D: 0</p>
              </div>
            </div>
          }
          onClick={() => undefined}
        />
      </div>
    </Body>
  );
}
