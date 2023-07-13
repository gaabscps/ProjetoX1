'use client';

import { Body } from '@/components/Body';
import Image from 'next/image';
import back from '@/assets/svg/back.svg';
import { Modal } from '@/components/Modal';
import FollowingCard from './components/FollowingCard';
import { Header } from '@/components/Header';
import Link from 'next/link';
import FastGameInputBody from '@/components/FastGameInputBody';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useChallenge from './useChallenge';

export default function Challenge() {
  const { users, openTag, handleOpenTag, modal } = useChallenge();
  const { openFastGame, openSearchingFastGame, setOpenFastGame, handleCloseModal, handleModalBody, handleOpenModal, openModal } = modal;

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
        <FastGameInputBody setOpenFastGame={setOpenFastGame} />

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
