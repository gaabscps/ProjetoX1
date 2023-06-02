import AccordionIcon from "@/assets/svg/AccordionIcon";
import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  style?: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const accordionStyle = {
    minHeight: contentHeight,
    overflow: isOpen ? "visible" : "hidden",
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={style}>
      <div
        style={
          isOpen
            ? { borderRadius: "10px 10px 0 0" }
            : { borderRadius: "10px", border: "0px" }
        }
        onClick={toggleAccordion}
        className="accordion-header d-flex align-items-center justify-content-between"
      >
        <div className="text-normal-400">{title}</div>
        {isOpen ? (
          <div
            style={{ transform: "rotate(180deg)", transition: "all ease 0.3s" }}
          >
            <AccordionIcon />
          </div>
        ) : (
          <div style={{ transform: "rotate(0)", transition: "all ease 0.3s" }}>
            <AccordionIcon />
          </div>
        )}
      </div>
      <div
        className={`accordion-content d-flex align-items-center ${
          isOpen ? "open" : "closed"
        }`}
        style={accordionStyle}
        ref={contentRef}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
