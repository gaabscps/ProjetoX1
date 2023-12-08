import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import { useState } from 'react';
import useChallenge from '../../useChallenge';

interface ModalBodyChallengeProps {
  handleChange: (event: any) => void;
  handleConfirmChallenge: () => void;
  userName: string;
  games: any;
  bet: string
  game: string
  duration: string
  textarea: string
}

export default function ModalBodyChallenge({
  bet,
  game,
  duration,
  textarea,
  games,
  userName,
  handleConfirmChallenge,
  handleChange,
}: ModalBodyChallengeProps) {

  console.log(bet)

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
        <Select name='game' value={game} placeholder='Jogo para o desafio' option={
          games?.map((game: any) => {
            return {
              value: game.gameId,
              label: game.gameName
            }
          })
        } onChange={handleChange} />
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
