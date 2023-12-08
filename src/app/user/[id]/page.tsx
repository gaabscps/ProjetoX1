'use client';

import { Body } from '@/components/Body';
import { Modal } from '@/components/Modal';

import { Header } from '@/components/Header';
import { useEffect } from 'react';
import useDashboard from '@/app/dashboard/useDashboard';
import UserSection from '@/app/dashboard/components/UserSection';
import MyGamesSection from '@/app/dashboard/components/MyGamesSection';
import UserArenaSection from '../components/ArenaSection';

export default function User({ params }: { params: { id: string } }) {

  useEffect(() => {
    // busca backend
    console.log(params.id)
  }, [params.id]);

  const { modal, profile, handleFollow } = useDashboard();
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
        <UserSection handleFollow={handleFollow} isVisiting profile={profile} />
        <MyGamesSection isVisiting profile={profile} setOpenAddGame={setOpenAddGame} />
        <Body marginBottom="60px">
          <hr style={{ background: '#3E3B3F' }} className="hr-line" />
        </Body>
      </div>
    </>
  );
}
