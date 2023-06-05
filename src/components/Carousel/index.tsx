import React, { useEffect, useState } from "react";
import { CarouselItem } from "./components/CarouselItem";
import { LeftArrow } from "@/assets/svg/LeftArrow";
import { LeftArrowHover } from "@/assets/svg/LeftArrowHover";
import { RightArrowHover } from "@/assets/svg/RightArrowHover";
import { RightArrow } from "@/assets/svg/RightArrow";
import { useMediaQuery } from "react-responsive";

interface CarouselProps {
  items: any[];
  title?: string;
  centerButton?: boolean;
}

export function Carrossel({ items, title, centerButton }: CarouselProps) {
  const desktop = useMediaQuery({
    query: "(min-width: 1110px)",
  });

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      isDesktop
        ? prevIndex > items.length - 5
          ? 0
          : prevIndex + 1
        : prevIndex > items.length - 3
        ? 0
        : prevIndex + 1
    );
    console.log({ currentIndex });
    console.log({ items });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      isDesktop
        ? prevIndex === 0
          ? items.length - 4
          : prevIndex - 1
        : prevIndex === 0
        ? items.length - 2
        : prevIndex - 1
    );
    console.log({ currentIndex });
    console.log({ items });
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

  const pages = items.length;
  const totalPages = items.length;

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="h4-500 h4-mb">{title}</h4>
        {/* Esta div serve para que caso não haja um titulo, o componente de paginação continue sendo renderizado no canto direito */}
        {!title && <div></div>}
        {pages > 1 && (
          <div className="carousel-pagination-indicator">
            {Array.from(
              { length: isDesktop ? totalPages - 3 : totalPages - 1 },
              (_, index) => (
                <div
                  key={index}
                  className={`carousel-pagination ${
                    Math.floor(currentIndex) === index ? "active" : ""
                  }`}
                />
              )
            )}
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
                isDesktop && totalPages > 4
                  ? `${(totalPages - 4) * (231 + 19)}px`
                  : `${(totalPages - 2) * (231 + 19)}px`,
            }}
          >
            <ul className="carouselVisibleItem">
              {items.map((item, index) => (
                <li key={index} className="carousel-item">
                  {item ? (
                    <CarouselItem item={item} />
                  ) : (
                    <div className="empty-item" />
                  )}
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
