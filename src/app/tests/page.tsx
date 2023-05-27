"use client";

import Accordion from "@/components/Accordion";
import { Button } from "@/components/Button";
import Carousel from "@/components/Carousel";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Landing() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const items =
    // 5 random images from https://picsum.photos/
    [
      <img title="1" src="https://picsum.photos/201/300"></img>,
      <img title="2" src="https://picsum.photos/199/300"></img>,
      <img title="3" src="https://picsum.photos/200/301"></img>,
      <img title="4" src="https://picsum.photos/200/299"></img>,
      <img title="5" src="https://picsum.photos/200/302"></img>,
    ];

  return (
    <>
      {isModalOpen && (
        <Modal
          setOpen={setisModalOpen}
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
          modalFooter={
            <Button
              onClick={() => setisModalOpen(false)}
              content={<div className="action-icon buttonContent">Fechar</div>}
            />
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
      <Carousel items={items} />
      <div>
        <h1>Accordion Example</h1>
        <Accordion title="Section 1" content={<p>Content for section 1</p>} />
        <Accordion title="Section 2" content={<p>Content for section 2</p>} />
        <Accordion title="Section 3" content={<p>Content for section 3</p>} />
      </div>
    </>
  );
}
