import { Button } from "@/components/Button";
import Input from "@/components/Input";

interface ModalBodyChallengeProps {
  setOpenModal: (open: boolean) => void;
  userName: string;
}

export default function ModalBodyChallenge({
  userName,
  setOpenModal,
}: ModalBodyChallengeProps) {
  return (
    <div className="mlr-4">
      <div className="d-flex flex-column justify-content-between">
        <div className="w-100 mb-2">
          <h6 style={{ marginBottom: "10px" }} className="h6-500">
            Confirme o seu desafio
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <span className="color-black-6">Jogador desafiado:</span>
            <span className="color-black-8">{userName}</span>
          </div>
        </div>
        <div className="mb-2">
          <Input />
          <Input />
          <Input marginBottom="5px" />
          <p>Mín: 10 minutos • Máx: 30 minutos </p>
        </div>
        <div className="mb-2">
          <Button
            onClick={() => setOpenModal(false)}
            theme="primary"
            width="100%"
            size="large"
            content="Confirmar e desafiar"
          />
        </div>
      </div>
    </div>
  );
}
