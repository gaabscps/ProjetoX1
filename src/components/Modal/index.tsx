'use client'

import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { ModalHeader } from './components/ModalHeader'
import useScrollLock from '@/hooks/useScrollLock'

interface ModalProps {
  modalHeader?: ReactElement | null
  modalHeaderBg?: string | null
  modalBody: ReactElement | null
  modalFooter?: ReactElement
  setOpen: Dispatch<SetStateAction<boolean>> | null
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
