import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import { useState } from 'react';

interface ModalBodyChallengeProps {
  handleConfirmChallenge: () => void;
  userName: string;
}

export default function ModalBodyChallenge({
  userName,
  handleConfirmChallenge,
}: ModalBodyChallengeProps) {
  const [game, setGame] = useState('');
  const [bet, setBet] = useState('');
  const [duration, setDuration] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case 'game':
        setGame(value);
        break;
      case 'bet':
        setBet(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      case 'textarea':
        setTextarea(value);
        break;
      default:
        break;
    }
  };


  return (
    <div className="mlr-4">
      <div className="d-flex flex-column justify-content-between">
        <div className="w-100 mb-2">
          <h6 style={{ marginBottom: '10px' }} className="h6-500">
            Confirme o seu desafio
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <span className="color-black-6">Jogador desafiado:</span>
            <span className="color-black-8">{userName}</span>
          </div>
        </div>
        <div className="mb-2">
          <Select name='game' value={game} placeholder='Jogo para o desafio' option={[
            'League of Legends', 'Valorant', 'CS:GO', 'Fortnite', 'Free Fire', 'PUBG', 'Clash Royale', 'Clash of Clans', 'Brawl Stars', 'FIFA', 'PES', 'Rocket League', 'Overwatch', 'Call of Duty', 'Rainbow Six', 'Minecraft', 'Outro'
          ]} onChange={handleChange} />
          <Input name='bet' value={bet} onChange={handleChange} type='number' placeholder="Valor da aposta (BRL)" />
          <Input name='duration' value={duration} onChange={handleChange} type='number' placeholder='Duração do convite. Ex: 10' />
          <p>Mín: 10 minutos • Máx: 30 minutos </p>
        </div>
        <Textarea name='textarea' onChange={handleChange} value={textarea} placeholder='Digite uma mensagem para o seu oponente. (opcional) Ex: Bora X1?' maxCharacters={60} marginBottom='40px' />
        <div className="mb-2">
          <Button
            onClick={() => {
              handleConfirmChallenge();
            }}
            theme="primary"
            width="100%"
            size="large"
            content="Confirmar e desafiar"
            disabled={!game || !bet || !duration}
          />
        </div>
      </div>
    </div>
  );
}
