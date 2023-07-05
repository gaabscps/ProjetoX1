'use client'

import { VideoSection } from './components/VideoSection'
import { Header } from './components/Header'
import { StatsSection } from './components/StatsSection'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { LastNewsSection } from './components/LastNewsSection'
import { GamesSection } from './components/GamesSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Body } from '@/components/Body'
import HowToPlay from './components/HowToPlay'
import LandingPageFaq from './components/FAQ'
import { Footer } from '@/components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalLoginBody } from './components/ModalBody/Login'
import { ModalRegisterBody } from './components/ModalBody/Register'
import useLanding from './useLanding'

export default function Landing() {
  const landing = useLanding();

  const modal = landing.modal;

  return (
    <>
      <Modal
        open={modal.openLogin || modal.openRegister}
        setOpen={
          modal.openLogin ? modal.setOpenLogin :
            modal.openRegister ? modal.setOpenRegister : null

        }
        modalBody={modal.openLogin ? (
          <ModalLoginBody handleRegisterButton={landing.handleRegisterButton} />) : (
          <ModalRegisterBody handleLoginButton={landing.handleLoginButton} />
        )
        }
        modalHeader={
          modal.openRegister ? (
            <span className='h-100 line-height-150 registerHeaderContent' style={{}}>
              Crie a sua conta e ganhe R$ 50,00 para começar a desafiar outros jogadores
            </span>
          ) : null
        }
        modalHeaderBg={modal.openRegister ? '#3E3B3F' : null}
      />
      <Header setOpenRegister={modal.setOpenRegister} setOpenLogin={modal.setOpenLogin} />
      <VideoSection setOpenRegister={modal.setOpenRegister} />
      <StatsSection />
      <hr className='statsLine' />
      <LastNewsSection />
      <GamesSection />
      <FeaturesSection />
      <Body marginBottom='130px' className='d-flex justify-content-center'>
        <Button
          onClick={() => modal.setOpenRegister(true)}
          size='large'
          content='Criar a minha conta'
        />
      </Body>
      <HowToPlay />

      <LandingPageFaq />
      <Footer />
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
  )
}
