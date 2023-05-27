import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export const Landing = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal
          setOpen={setisModalOpen}
          modalFooter={
            <Button
              onClick={() => setisModalOpen(false)}
              content={<div className="action-icon">Fechar</div>}
            />
          }
          modalBody={
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>Hello World!</div>
              </div>
            </>
          }
        />
      )}
      <div
        onClick={() => {
          setisModalOpen(true);
          console.log(isModalOpen);
        }}
        style={{ cursor: "pointer", color: "black" }}
      >
        Hello World!
      </div>
    </>
  );
};
