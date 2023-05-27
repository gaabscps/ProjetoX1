"use client";

import React, { ReactElement, useState } from "react";
import { ModalHeader } from "./components/ModalHeader";

interface ModalProps {
  modalBody: ReactElement;
  modalFooter?: ReactElement;
  setOpen: (open: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalBody,
  modalFooter,
  setOpen,
}) => {
  return (
    <>
      <div className="modalModule">
        <div className="modalContainer">
          <ModalHeader content={<></>} setOpen={setOpen} />
          <div className="modalBody">{modalBody}</div>
          {modalFooter && (
            <div className="modalBodyFooterContainer">
              <div className="modalBodyFooterContent">{modalFooter}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
