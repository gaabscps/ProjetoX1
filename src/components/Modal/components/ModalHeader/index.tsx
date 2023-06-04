"use client";

import React from "react";
import { CloseX } from "@/assets/svg/CloseX";

interface ModalHeaderProps {
  content: string | JSX.Element;
  setOpen: (open: boolean) => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  content,
  setOpen,
}) => {
  return (
    <>
      <div className="modalHeader">
        <div className="modalHeader--content">{content}</div>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="buttonRoundEffect action-icon"
        >
          <CloseX />
        </div>
      </div>
    </>
  );
};
