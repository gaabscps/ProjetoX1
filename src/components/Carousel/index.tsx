import React, { useState } from "react";
import { CarouselItem } from "./components/CarouselItem";

interface CarouselProps {
  items: any[];
}

const Carrossel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex >= items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = items
    .slice(currentIndex, currentIndex + 4)
    .concat(items.slice(0, Math.max(0, 4 - items.length + currentIndex)));

  return (
    <div style={{ display: "flex" }}>
      <button style={{ color: "black" }} onClick={handlePrev}>
        Anterior
      </button>
      {visibleItems.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
      <button style={{ color: "black" }} onClick={handleNext}>
        Próximo
      </button>
    </div>
  );
};

export default Carrossel;
