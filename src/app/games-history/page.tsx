'use client';

import { Body } from '@/components/Body';
import Link from 'next/link';
import Image from 'next/image';
import back from '@/assets/svg/back.svg';
import { Header } from '@/components/Header';
import { Modal } from '@/components/Modal';
import ChallengeSentCard from './components/ChallengesSentCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGameHistory from './useGameHistory';
import { OcurrenceModalBody } from './components/ModalBody/Ocurrence';
import useChallengesSent from '../challenges-sent/useChallengesSent';

export default function ChallengeSent() {

  const gamesHistory = useGameHistory()
  const {
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    openOcurrence,
  } = gamesHistory

  const { Challenges } = useChallengesSent()

  return (
    <>
      <Modal
        modalHeaderBg={'#29272a'}
        open={openOcurrence.some(Boolean)}
        modalBody={<OcurrenceModalBody handleSubmit={handleSubmit} />}
        setOpen={handleCloseModal}
      />
      <Header />
      <Body>
        <div className='pageBody'>
          <div className='d-flex align-items-center flex-gap-1'>
            <Link href='/dashboard'>
              <Image src={back} width={16} height={16} alt='' />
            </Link>
            <h5 style={{ marginBottom: '10px' }} className='h5-500'>Todos os jogos realizados (6)</h5>
          </div>
          <p className='color-black-7' style={{ marginBottom: '30px' }}>Consulte os desafios que você enviou</p>
        </div>
        <h6 style={{ marginBottom: '15px' }} className="h6-400 line-height-150">Março/2023</h6>

        <p style={{ marginBottom: '30px' }} className="color-black-7">
          12 de Março
        </p>
        <p style={{ marginBottom: '10px' }}>
          Fifa 2023
        </p>
        <div style={{ flexWrap: 'wrap' }} className="user-card-challenge-container">
          {Challenges.map((challenge, index) => (
            <ChallengeSentCard key={index} challenge={challenge} handleOpenModal={() => handleOpenModal(index)} />
          ))
          }
        </div>
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

      </Body>
    </>
  );
}