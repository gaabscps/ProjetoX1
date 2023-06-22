"use client";

import React from "react";
import { CloseX } from "@/assets/svg/CloseX";

interface ModalHeaderProps {
  content: string | JSX.Element | null;
  setOpen: (open: boolean) => void;
  modalHeaderBg?: string | null;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  modalHeaderBg = "",
  content,
  setOpen,
}) => {
  return (
    <>
      <div
        style={{ background: modalHeaderBg || "" }}
        className={`modalHeader ${content ? "modalHeader--content" : ""}`}
      >
        <div className="modalHeader--content">{content}</div>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="buttonRoundEffect action-icon"
          style={content ? { position: "relative", top: "-10px" } : {}}
        >
          <CloseX />
        </div>
      </div>
    </>
  );
};
