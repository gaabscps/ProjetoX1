import { Button } from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useState } from "react";

interface ModalFastGameBodyProps {
  setOpenFastGame: (value: boolean) => void;
}

export default function ModalFastGameBody({
  setOpenFastGame,
}: ModalFastGameBodyProps) {
  return (
    <>
      <div className="fastGameModalBody d-flex flex-column">
        <div className="fastGameModalTitle">
          <h6 style={{ marginBottom: "10px" }} className="h6-500">
            Jogo rápido
          </h6>
        </div>
        <Select placeholder="Jogo a ser jogado" option={["Jogo 1", "Jogo 2"]} />
        <Select
          placeholder="Nível do oponente"
          option={["Facil", "Intermediario"]}
        />
        <Input
          type="number"
          placeholder="Valor da aposta (BRL)"
          marginBottom="40px"
        />
        <Button
          theme="primary"
          onClick={() => {
            setOpenFastGame(false);
          }}
          width="100%"
          size="large"
          content="Procurar jogo rápido"
        />
      </div>
    </>
  );
}
