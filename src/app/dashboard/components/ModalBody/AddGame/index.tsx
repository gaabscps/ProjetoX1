import Accordion from "@/components/Accordion";
import { Button } from "@/components/Button";
import { RadioGroup } from "@/components/RadioGroup";
import { GamesRank } from "@/types/GamesRank";
import { useState } from "react";

export default function ModalAddGameBody() {
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
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
        },
      ],
    },
    {
      name: "Overwatch",
      rank: [
        {
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
        },
      ],
    },
    {
      name: "Fortnite",
      rank: [
        {
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
        },
      ],
    },
    {
      name: "Minecraft",
      rank: [
        {
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
        },
      ],
    },
    {
      name: "Apex Legends",
      rank: [
        {
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
        },
      ],
    },
    {
      name: "Call of Duty: Warzone",
      rank: [
        {
          value: "Iron",
          label: "Iron",
        },
        {
          value: "Bronze",
          label: "Bronze",
        },
        {
          value: "Silver",
          label: "Silver",
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
        <div>
          <p className="text-center color-black-6 line-height-150">
            Ao adicionar um jogo, você concorda com os nossos
          </p>
          <p className="text-center line-height-150 mb-1">Termos e Condições</p>
          <Button
            onClick={() => console.log(selectedValues)}
            width="100%"
            size="large"
            content="Adicionar"
          />
        </div>
      </div>
    </>
  );
}
