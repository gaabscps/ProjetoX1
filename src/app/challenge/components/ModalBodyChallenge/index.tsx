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

  const games = [
    { value: 0, label: 'League of Legends' },
    { value: 1, label: 'Valorant' },
    { value: 2, label: 'CS:GO' },
    { value: 3, label: 'Fortnite' },
    { value: 4, label: 'Free Fire' },
    { value: 5, label: 'PUBG' },
    { value: 6, label: 'Clash Royale' },
    { value: 7, label: 'Clash of Clans' },
    { value: 8, label: 'Brawl Stars' },
    { value: 9, label: 'FIFA' },
    { value: 10, label: 'PES' },
    { value: 11, label: 'Rocket League' },
    { value: 12, label: 'Overwatch' },
    { value: 13, label: 'Call of Duty' },
    { value: 14, label: 'Rainbow Six' },
    { value: 15, label: 'Minecraft' },
    { value: 16, label: 'Outro' }
  ];


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
        <Select name='game' value={game} placeholder='Jogo para o desafio' option={games} onChange={handleChange} />
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
  );
}
