import { Button } from '@/components/Button';
import Timer from '@/components/Timer';
import { maskBRL } from '@/utils/mask/maskMoney';
import { useEffect } from 'react';

interface ModalSearchingFastGameBodyProps {
  handleLeaveFastGameQueue: () => void;
  handleFastGameQueue: () => void;
}

export default function ModalSearchingFastGameBody({
  handleLeaveFastGameQueue,
  handleFastGameQueue,
}: ModalSearchingFastGameBodyProps) {
  const game = JSON.parse(sessionStorage.getItem('fastGame') || '{}');

  useEffect(() => {
      handleFastGameQueue();
  }, []);

  return (
    <>
      <div className="searchingFastGameModalBody d-flex flex-column">
        <div className="searchingFastGameModalTitle">
          <h6 className="h6-500">Procurando o oponente...</h6>
        </div>

        <div className="mb-2">
          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Jogo a ser jogado</p>
            <p>{game.game}</p>
          </div>
          {/* 
          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Nível do oponente</p>
            <p>Profissional</p>
          </div> */}

          <div className="searchingFastGameDetails d-flex align-items-center justify-content-between">
            <p className="color-black-7">Aposta:</p>
            <p>{maskBRL(game.bet)}</p>
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
          <p>{game.expectedTime}</p>
        </div>

        <Button
          theme="primary"
          onClick={() => {
            handleLeaveFastGameQueue();
          }}
          width="100%"
          size="large"
          content="Sair da fila"
        />
      </div>
    </>
  );
}
