'use client';

import { Body } from '@/components/Body';
import { Modal } from '@/components/Modal';

import UserSection from '../components/UserSection';
import MyGamesSection from '../components/MyGamesSection';
import ArenaSection from '../components/ArenaSection';
import { Header } from '@/components/Header';
import useDashboard from '../useDashboard';
import { useEffect } from 'react';

export default function User({ params }: { params: { id: string } }) {

  useEffect(() => {
    // busca backend
    console.log(params.id)
  }, [params.id]);

  const dashboard = useDashboard();
  const { openAddGame, openFastGame, openSearchingFastGame, setOpenAddGame, setOpenFastGame, setOpenSearchingFastGame, handleModalBody } = dashboard.modal;

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
        <UserSection isVisiting />
        <MyGamesSection setOpenAddGame={setOpenAddGame} />
        <Body marginBottom="60px">
          <hr style={{ background: '#3E3B3F' }} className="hr-line" />
        </Body>
        <ArenaSection isVisiting setOpenFastGame={setOpenFastGame} />
      </div>
    </>
  );
}
