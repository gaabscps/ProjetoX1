'use client';
import { Body } from '@/components/Body';
import { Modal } from '@/components/Modal';

import UserSection from './components/UserSection';
import MyGamesSection from './components/MyGamesSection';
import ArenaSection from './components/ArenaSection';
import { Header } from '@/components/Header';
import { useState } from 'react';
import ModalAddGameBody from './components/ModalBody/AddGame';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame';

export default function Dashboard() {

  const [openAddGame, setOpenAddGame] = useState(false)
  const [openFastGame, setOpenFastGame] = useState(false)
  const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)


  const handleSearchingFastGame = () => {
    setOpenFastGame(false)
    setOpenSearchingFastGame(true)
  }

  function handleModalBody() {

    if (openAddGame) {
      return <ModalAddGameBody setOpenAddGame={setOpenAddGame} />
    }
    if (openFastGame) {
      return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
    }
    if (openSearchingFastGame) {
      return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
    }
    return null
  }

  return (
    <>
      <Modal
        open={
          openAddGame || openFastGame || openSearchingFastGame
        }
        setOpen={
          openAddGame ? setOpenAddGame :
            openFastGame ? setOpenFastGame :
              openSearchingFastGame ? setOpenSearchingFastGame
                : null
        }
        modalBody={handleModalBody()}
        modalHeaderBg={null}
      />

      <Header
      />
      <div className="pageBody">
        <UserSection />
        <MyGamesSection setOpenAddGame={setOpenAddGame} />
        <Body marginBottom="60px">
          <hr style={{ background: '#3E3B3F' }} className="hr-line" />
        </Body>
        <ArenaSection setOpenFastGame={setOpenFastGame} />
      </div>
    </>
  );
}
