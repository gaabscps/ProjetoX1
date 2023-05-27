"use client";

import React, { Dispatch, SetStateAction } from "react";
// import { CloseX } from "../../../../assets/images/svg/closeX";
import Link from "next/link";

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
        <div className="modalHeader--icon">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="buttonRoundEffect"
          >
            <Link href="/404">
              {/* <CloseX color="white" width={20} height={20} /> */}
            </Link>
          </div>
        </div>
        <div className="modalHeader--content">{content}</div>
        <div className="modalHeader--icon"></div>
      </div>
    </>
  );
};
