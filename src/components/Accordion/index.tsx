import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string>("0px");

  const accordionStyle = {
    maxHeight: contentHeight,
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      <div
        className="accordion-content"
        style={accordionStyle}
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
