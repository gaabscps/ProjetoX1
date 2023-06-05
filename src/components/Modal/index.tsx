"use client";

import React, { ReactElement, useState } from "react";
import { ModalHeader } from "./components/ModalHeader";

interface ModalProps {
  modalHeader?: ReactElement | null;
  modalHeaderBg?: string | null;
  modalBody: ReactElement;
  modalFooter?: ReactElement;
  setOpen: (open: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalHeader = null,
  modalHeaderBg = "#000",
  modalBody,
  modalFooter,
  setOpen,
}) => {
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
      <div className="modalModule">
        <div className="modalContainer">
          <ModalHeader
            modalHeaderBg={modalHeaderBg}
            content={modalHeader}
            setOpen={setOpen}
          />
          <div className="modalBodyFooterContainer">
            <div className="modalBody">{modalBody}</div>
            {modalFooter && (
              <div className="modalBodyFooterContent">{modalFooter}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
