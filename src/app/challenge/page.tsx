'use client';

import { useState } from 'react';
import { Body } from '@/components/Body';
import Input from '@/components/Input';
import Image from 'next/image';
import back from '@/assets/svg/back.svg';
import { Modal } from '@/components/Modal';
import ModalBodyChallenge from './components/ModalBodyChallenge';
import FollowingCard from './components/FollowingCard';
import { Header } from '@/components/Header';
import Link from 'next/link';

interface User {
  userImage: string;
  userName: string;
  gamesPlayed: string;
  gamesVictory: string;
  gamesDefeat: string;
}

export default function Challenge() {
  const [openTag, setOpenTag] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState<boolean[]>([]);

  const users: User[] = [
    {
      userImage: '1.jpg',
      userName: 'John',
      gamesPlayed: '10',
      gamesVictory: '7',
      gamesDefeat: '3',
    },
    {
      userImage: '2.jpg',
      userName: 'Emily',
      gamesPlayed: '15',
      gamesVictory: '9',
      gamesDefeat: '6',
    },
    {
      userImage: '3.jpg',
      userName: 'David',
      gamesPlayed: '8',
      gamesVictory: '4',
      gamesDefeat: '4',
    },
    {
      userImage: '4.jpg',
      userName: 'Sarah',
      gamesPlayed: '12',
      gamesVictory: '10',
      gamesDefeat: '2',
    },
    {
      userImage: '5.jpg',
      userName: 'Michael',
      gamesPlayed: '20',
      gamesVictory: '15',
      gamesDefeat: '5',
    },
  ];

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
  };

  return (
    <>
      <Modal
        modalHeaderBg={'#29272a'}
        open={openModal.some(Boolean)}
        modalBody={
          <ModalBodyChallenge
            userName={users[openModal.findIndex(Boolean)]?.userName}
            setOpenModal={handleCloseModal}
          />
        }
        setOpen={handleCloseModal}
      />
      <Header
        setOpenLogin={() => undefined}
        setOpenRegister={() => undefined}
      />
      <Body>
        <div className="pageBody">
          <div className="d-flex align-items-center flex-gap-1">
            <Link href="/dashboard">
              <Image src={back} width={16} height={16} alt="" />
            </Link>
            <h5 className="h5-500">Desafiar</h5>
          </div>
          <p>Desafie os jogadores que você segue</p>
        </div>

        <Input />

        <h6 className="h6-400">Seguindo ({users.length})</h6>

        <div style={{ flexWrap: 'wrap' }} className="d-flex flex-gap-3">
          {users.map((user, index) => (
            <div key={index} style={{ width: '30.4%' }} className="mb-1 h-100">
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
          ))}
        </div>
      </Body>
    </>
  );
}
