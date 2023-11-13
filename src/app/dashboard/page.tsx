'use client';
import { Body } from '@/components/Body';
import { Modal } from '@/components/Modal';

import UserSection from './components/UserSection';
import MyGamesSection from './components/MyGamesSection';
import ArenaSection from './components/ArenaSection';
import { Header } from '@/components/Header';
import useDashboard from './useDashboard';


export default function Dashboard() {

  const { modal, profile } = useDashboard();
  const { openAddGame, openFastGame, openSearchingFastGame, setOpenAddGame, setOpenFastGame, setOpenSearchingFastGame, handleModalBody } = modal;

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
        <UserSection profile={profile} />
        <MyGamesSection profile={profile} setOpenAddGame={setOpenAddGame} />
        <Body marginBottom="60px">
          <hr style={{ background: '#3E3B3F' }} className="hr-line" />
        </Body>
        <ArenaSection profile={profile} setOpenFastGame={setOpenFastGame} />
      </div>
    </>
  );
}
