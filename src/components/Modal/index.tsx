'use client'

import React, { ReactElement } from 'react'
import { ModalHeader } from './components/ModalHeader'
import useScrollLock from '@/hooks/useScrollLock'

interface ModalProps {
  modalHeader?: ReactElement | null
  modalHeaderBg?: string | null
  modalBody: ReactElement | null
  modalFooter?: ReactElement
  setOpen: (open: boolean) => void
  open?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  modalHeader = null,
  modalHeaderBg = '#000',
  modalBody,
  modalFooter,
  setOpen,
  open,
}) => {
  useScrollLock(!!open)

  {
    /* 
    Para usar este componente, copie exemplo abaixo, adicione novos body pelo hook useModal:
      import { Modal } from "@/components/Modal";
      import { useModal } from "@/hooks/useModal";

      const modal = useModal();

      return (
    {(modal.openLogin || modal.openRegister) && (
      <Modal
        setOpen={modal.handleSetModal}
        modalBody={modal.handleModalBody()}
      />
      )}
      )
  */
  }

  return (
    <>
      <div
        style={{
          opacity: open ? 1 : 0,
          zIndex: open ? 102 : -1,
        }}
        className='modalModule'
      >
        <div
          style={{
            transform: open ? 'scale(1)' : 'scale(0)',
            opacity: open ? 1 : 0,
            zIndex: open ? 102 : -1,
          }}
          className='modalContainer'
        >
          <ModalHeader modalHeaderBg={modalHeaderBg} content={modalHeader} setOpen={setOpen} />
          <div className='modalBodyFooterContainer'>
            <div className='modalBody'>{modalBody}</div>
            {modalFooter && <div className='modalBodyFooterContent'>{modalFooter}</div>}
          </div>
        </div>
      </div>
    </>
  )
}
