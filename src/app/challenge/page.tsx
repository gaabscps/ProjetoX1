'use client';

import { useState } from 'react';
import { Body } from '@/components/Body';
import Image, { StaticImageData } from 'next/image';
import back from '@/assets/svg/back.svg';
import { Modal } from '@/components/Modal';
import ModalBodyChallenge from './components/ModalBodyChallenge';
import FollowingCard from './components/FollowingCard';
import { Header } from '@/components/Header';
import gabs from '@/assets/svg/gabs.jpg';
import Link from 'next/link';
import FastGameInput from '@/components/FastGameInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from '@/types/Users';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from '../dashboard/components/ModalBody/SearchingFastGame';



export default function Challenge() {
  const [openFastGame, setOpenFastGame] = useState(false)
  const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
  const [openTag, setOpenTag] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState<boolean[]>([]);

  const users: User[] = [
    {
      userImage: gabs,
      userName: 'John',
      gamesPlayed: '10',
      gamesVictory: '7',
      gamesDefeat: '3',
    },
    {
      userImage: gabs,
      userName: 'Emily',
      gamesPlayed: '15',
      gamesVictory: '9',
      gamesDefeat: '6',
    },
    {
      userImage: gabs,
      userName: 'David',
      gamesPlayed: '8',
      gamesVictory: '4',
      gamesDefeat: '4',
    },
    {
      userImage: gabs,
      userName: 'Sarah',
      gamesPlayed: '12',
      gamesVictory: '10',
      gamesDefeat: '2',
    },
    {
      userImage: gabs,
      userName: 'Michael',
      gamesPlayed: '20',
      gamesVictory: '15',
      gamesDefeat: '5',
    },
  ];

  function handleModalBody() {
    if (openFastGame) {
      return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
    }
    if (openSearchingFastGame) {
      return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
    }
    if (openModal.some(Boolean)) {
      return <ModalBodyChallenge
        userName={users[openModal.findIndex(Boolean)]?.userName}
        handleConfirmChallenge={handleConfirmChallenge}
      />
    }
    return null
  }

  const handleSearchingFastGame = () => {
    setOpenFastGame(false)
    setOpenSearchingFastGame(true)
  }


  const handleOpenTag = (index: number) => {
    const newOpenTag = [...openTag];
    newOpenTag[index] = !newOpenTag[index];
    setOpenTag(newOpenTag);
  };

  const handleOpenModal = (index: number) => {
    const newOpenModal = [...openModal];
    newOpenModal[index] = !newOpenModal[index];
    setOpenModal(newOpenModal);
  };

  const handleCloseModal = () => {
    setOpenModal([]);
    setOpenFastGame(false);
  };

  const handleConfirmChallenge = () => {
    handleCloseModal();
    toast.success('Desafio enviado com sucesso ! Agora é só aguardar o seu oponente aceitar o seu desafio.');
  }


  return (
    <>
      <Modal
        modalHeaderBg={'#29272a'}
        open={openFastGame || openSearchingFastGame || openModal.some(Boolean)}
        modalBody={handleModalBody()}
        setOpen={handleCloseModal}
      />
      <Header
      />
      <Body>
        <div className='pageBody'>
          <div className='d-flex align-items-center flex-gap-1'>
            <Link href='/dashboard'>
              <Image src={back} width={16} height={16} alt='' />
            </Link>
            <h5 style={{ marginBottom: '10px' }} className='h5-500'>Desafiar</h5>
          </div>
          <p className='color-black-7' style={{ marginBottom: '30px' }}>Desafie os jogadores que você segue</p>
        </div>
        <FastGameInput setOpenFastGame={setOpenFastGame} />

        <h6 style={{ marginBottom: '10px' }} className='h6-400 line-height-150'>Seguindo ({users.length})</h6>

        <div style={{ flexWrap: 'wrap' }} className='user-card-challenge-container'>
          {
            users && users.length > 0 ?
              users.map((user, index) => (
                <div key={index} className='user-card-challenge'>
                  <FollowingCard
                    openTag={openTag[index]}
                    setOpenTag={() => handleOpenTag(index)}
                    setOpenModal={() => handleOpenModal(index)}
                    userImage={user.userImage}
                    userName={user.userName}
                    gamesPlayed={user.gamesPlayed}
                    gamesVictory={user.gamesVictory}
                    gamesDefeat={user.gamesDefeat}
                  />
                </div>
              ))
              :
              <div>
                <p style={{ marginBottom: '10px' }} className='line-height-150 color-black-7'>Você ainda não está seguindo nenhum jogador.</p>
                <p className='line-height-150 color-black-7' >Procure por um jogador para seguir e desafiar ou inicie um jogo rápido.</p>
              </div>
          }

        </div>
      </Body>
      <ToastContainer theme='dark' toastStyle={{
        background: '#29272A',
        fontSize: '14px',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
      }}
        progressStyle={{
          background: '#963BFF',
        }}
        autoClose={10000}
      />
    </>
  );
}
