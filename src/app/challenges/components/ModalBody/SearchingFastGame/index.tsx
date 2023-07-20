import { Button } from '@/components/Button';
import Timer from '@/components/Timer';
import { Challenges } from '@/types/Challenges';

interface ModalSearchingFastGameBodyProps {
  setOpenSearchingFastGame: (value: boolean) => void;
  challenges: Challenges[];
  index: number;
}

export default function ModalSearchingFastGameBody({
  setOpenSearchingFastGame,
  challenges,
  index,
}: ModalSearchingFastGameBodyProps) {

  return (
    <>
      <div className="searchingFastGameModalBody d-flex flex-column">
        <div className="searchingFastGameModalTitle">
          <h6 className="h6-500">Procurando o oponente...</h6>
        </div>

        <div className="mb-2">
          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Jogo a ser jogado</p>
            <p>{challenges.some(Boolean) && challenges[index].game}</p>
          </div>

          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Nível do oponente</p>
            <p>{challenges.some(Boolean) && challenges[index].gameRank}</p>
          </div>

          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Aposta:</p>
            <p>R$ {challenges.some(Boolean) && challenges[index].value}</p>
          </div>
        </div>

        <div
          style={{ marginBottom: '10px' }}
          className="d-flex justify-content-center"
        >
          <Timer seconds={0} />
        </div>
        <div
          style={{ marginBottom: '40px' }}
          className="d-flex justify-content-center"
        >
          <p className="color-black-7">Tempo estimado:&nbsp;</p>
          <p>2:13</p>
        </div>

        <Button
          theme="primary"
          onClick={() => {
            setOpenSearchingFastGame(false);
          }}
          width="100%"
          size="large"
          content="Sair da fila"
        />
      </div>
    </>
  );
}
