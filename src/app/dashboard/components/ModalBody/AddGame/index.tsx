import Accordion from "@/components/Accordion";
import { Button } from "@/components/Button";
import { RadioGroup } from "@/components/RadioGroup";
import { GamesRank } from "@/types/GamesRank";
import { useState } from "react";

interface ModalAddGameBodyProps {
  setOpenAddGame: (value: boolean) => void;
}

export default function ModalAddGameBody({
  setOpenAddGame,
}: ModalAddGameBodyProps) {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>(
    {}
  );

  const handleOptionChange = (game: any, value: any) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [game]: value,
    }));
  };

  const games: GamesRank[] = [
    {
      name: "League of Legends",
      rank: [
        {
          value: "Iniciante",
          label: "Iniciante",
        },
        {
          value: "Intermediário",
          label: "Intermediário",
        },
        {
          value: "Expert",
          label: "Expert",
        },
      ],
    },
    {
      name: "Valorant",
      rank: [
        {
          value: "Iniciante",
          label: "Iniciante",
        },
        {
          value: "Intermediário",
          label: "Intermediário",
        },
        {
          value: "Expert",
          label: "Expert",
        },
      ],
    },
    {
      name: "CS:GO",
      rank: [
        {
          value: "Iniciante",
          label: "Iniciante",
        },
        {
          value: "Intermediário",
          label: "Intermediário",
        },
        {
          value: "Expert",
          label: "Expert",
        },
      ],
    },
  ];

  return (
    <>
      <div className="addGameModalBody d-flex flex-column justify-content-between">
        <div>
          <div className="w-100 mb-2">
            <h6 style={{ marginBottom: "10px" }} className="h6-500">
              Adicionar jogo
            </h6>
            <span className="color-black-6">
              Selecione o(s) jogo(s) que você quer adicionar e depois o rank
            </span>
          </div>
          <div>
            {games.map((game) => (
              <Accordion
                key={game.name}
                style={{ marginBottom: "20px" }}
                title={game.name}
                content={
                  <div className="addGameContent">
                    <p className="rankTitle">Rank</p>
                    <RadioGroup
                      options={game.rank}
                      selectedValue={selectedValues[game.name] || ""}
                      setSelectedValue={(value) =>
                        handleOptionChange(game.name, value)
                      }
                    />
                  </div>
                }
              />
            ))}
          </div>
        </div>
        <div className="mb-2">
          <p className="text-center color-black-6 line-height-150">
            Ao adicionar um jogo, você concorda com os nossos
          </p>
          <p className="text-center line-height-150 mb-1">Termos e Condições</p>
          <Button
            disabled={Object.keys(selectedValues).length === 0}
            theme="primary"
            onClick={() => {
              console.log(selectedValues);
              setOpenAddGame(false);
            }}
            width="100%"
            size="large"
            content="Adicionar"
          />
        </div>
      </div>
    </>
  );
}
