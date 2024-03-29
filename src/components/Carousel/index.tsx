import React, { useState } from "react";
import { CarouselItem } from "./components/CarouselItem";
import { LeftArrow } from "@/assets/svg/LeftArrow";
import { LeftArrowHover } from "@/assets/svg/LeftArrowHover";
import { RightArrowHover } from "@/assets/svg/RightArrowHover";
import { RightArrow } from "@/assets/svg/RightArrow";

interface CarouselProps {
  items: any[];
  title?: string;
  centerButton?: boolean;
}

export function Carrossel({ items, title, centerButton }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex >= items.length - 4 ? 0 : prevIndex + 4
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex >= items.length - 4 ? 0 : prevIndex - 4 < 0 ? 0 : prevIndex - 4
    );
  };

  const handleMouseEnterLeft = () => {
    setHoverLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setHoverLeft(false);
  };

  const handleMouseEnterRight = () => {
    setHoverRight(true);
  };

  const handleMouseLeaveRight = () => {
    setHoverRight(false);
  };

  const handleMouseDownLeft = () => {
    setActiveLeft(true);
  };

  const handleMouseUpLeft = () => {
    setActiveLeft(false);
  };

  const handleMouseDownRight = () => {
    setActiveRight(true);
  };

  const handleMouseUpRight = () => {
    setActiveRight(false);
  };

  const totalPages = Math.ceil(items.length / 4); // Calcula o número total de páginas

  const visibleItems = items;

  const emptyItems = 4 - visibleItems.length;

  for (let i = 0; i < emptyItems; i++) {
    visibleItems.push(null);
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="h4-500 h4-mb">{title}</h4>
        {/* Esta div serve para que caso não haja um titulo, o componente de paginação continue sendo renderizado no canto direito */}
        {!title && <div></div>}
        {totalPages > 1 && (
          <div className="carousel-pagination-indicator">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={`carousel-pagination ${
                  Math.floor(currentIndex / 4) === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div style={{ width: "100%" }} className="d-flex carousel-align">
        <button
          onMouseDown={handleMouseDownLeft}
          onMouseUp={handleMouseUpLeft}
          onMouseEnter={handleMouseEnterLeft}
          onMouseLeave={handleMouseLeaveLeft}
          className={`carousel-button left
          ${activeLeft && "arrowClick"}
          ${centerButton && "arrowMargin"}`}
          onClick={handlePrev}
        >
          {hoverLeft ? <LeftArrowHover /> : <LeftArrow />}
        </button>
        <div className="carousel-container">
          <div
            className="carousel-items-container"
            style={{
              transform: `translateX(-${currentIndex * (231 + 19)}px)`,
              marginLeft:
                //Logica para adicionar margem à esquerda e adequar à quantidade de itens
                `${(-231 - 19) * (4 - visibleItems.length)}px`,
            }}
          >
            <ul className="carouselVisibleItem">
              {visibleItems.map((item, index) => (
                <li key={index} className="carousel-item">
                  <div className="carousel-item-wrapper">
                    {item ? (
                      <CarouselItem item={item} />
                    ) : (
                      <div className="empty-item" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onMouseDown={handleMouseDownRight}
          onMouseUp={handleMouseUpRight}
          onMouseEnter={handleMouseEnterRight}
          onMouseLeave={handleMouseLeaveRight}
          className={`carousel-button right
           ${activeRight && "arrowClick"}
            ${centerButton && "arrowMargin"}`}
          onClick={handleNext}
        >
          {hoverRight ? <RightArrowHover /> : <RightArrow />}
        </button>
      </div>
    </>
  );
}
