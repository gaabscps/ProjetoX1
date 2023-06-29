'use client';
import { Body } from '@/components/Body';
import { Header } from '@/components/Header';
import { Modal } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';

import UserSection from './components/UserSection';
import MyGamesSection from './components/MyGamesSection';
import ArenaSection from './components/ArenaSection';

export default function Dashboard() {
  const modal = useModal();

  return (
    <>
      <Modal
        open={
          modal.openAddGame || modal.openFastGame || modal.openSearchingFastGame
        }
        setOpen={modal.handleSetModal}
        modalBody={modal.handleModalBody()}
        modalHeader={
          modal.openRegister ? (
            <span
              className="h-100 line-height-150 registerHeaderContent"
              style={{}}
            >
              Crie a sua conta e ganhe R$ 50,00 para começar a desafiar outros
              jogadores
            </span>
          ) : null
        }
        modalHeaderBg={modal.openRegister ? '#3E3B3F' : null}
      />

      <Header
        setOpenRegister={modal.setOpenRegister}
        setOpenLogin={modal.handleSetModal}
      />
      <div className="pageBody">
        <UserSection />
        <MyGamesSection modal={modal} />
        <Body marginBottom="60px">
          <hr style={{ background: '#3E3B3F' }} className="hr-line" />
        </Body>
        <ArenaSection modal={modal} />
      </div>
    </>
  );
}
