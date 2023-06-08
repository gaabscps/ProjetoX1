import React, { useState } from "react";
import { CarouselItem } from "./components/CarouselItem";
import { LeftArrow } from "@/assets/svg/LeftArrow";
import { LeftArrowHover } from "@/assets/svg/LeftArrowHover";
import { RightArrowHover } from "@/assets/svg/RightArrowHover";
import { RightArrow } from "@/assets/svg/RightArrow";
import { useTabletHook } from "@/hooks/useMediaQuery/isTablet";
import { useMobileHook } from "@/hooks/useMediaQuery/isMobile";

interface CarouselProps {
  items: any[];
  title?: string;
  centerButton?: boolean;
}

export function Carrossel({ items, title, centerButton }: CarouselProps) {
  const isTablet = useTabletHook();
  const isMobile = useMobileHook();

  const [startX, setStartX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => {
      let newIndex;

      if (isTablet && isMobile) {
        if (prevIndex > items.length - 2) {
          newIndex = items.length - 1;
        } else {
          newIndex = prevIndex + 1;
        }
      } else if (isTablet) {
        if (prevIndex > items.length - 4) {
          newIndex = 0;
        } else {
          newIndex = prevIndex + 1;
        }
      } else if (isMobile) {
        if (prevIndex > items.length - 2) {
          newIndex = 0;
        } else {
          newIndex = prevIndex + 1;
        }
      } else {
        if (prevIndex > items.length - 5) {
          newIndex = 0;
        } else {
          newIndex = prevIndex + 1;
        }
      }

      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => {
      let newIndex;

      if (isTablet && isMobile) {
        if (prevIndex === 0) {
          newIndex = 0;
        } else {
          newIndex = (prevIndex || 0) - 1;
        }
      } else if (isTablet) {
        if (prevIndex === 0) {
          newIndex = items.length - 3;
        } else {
          newIndex = prevIndex - 1;
        }
      } else if (isMobile) {
        if (prevIndex === 0) {
          newIndex = items.length - 1;
        } else {
          newIndex = prevIndex - 1;
        }
      } else {
        if (prevIndex === 0) {
          newIndex = items.length - 4;
        } else {
          newIndex = prevIndex - 1;
        }
      }

      return newIndex;
    });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMoveCapture = (event: React.TouchEvent) => {
    const currentX = event.touches[0].clientX;
    const diffX = currentX - startX;

    if (diffX > 0) {
      // Swiped right
      if (diffX > 80) {
        handlePrev();
        setStartX(currentX); // Reset startX to prevent continuous swiping
      }
    } else if (diffX < 0) {
      // Swiped left
      if (diffX < -80) {
        handleNext();
        setStartX(currentX); // Reset startX to prevent continuous swiping
      }
    }
  };

  const handleTouchEnd = () => {
    document.body.style.overflow = "auto";
  };

  const handlePaginationSize = () => {
    let result;

    if (isTablet && isMobile) {
      // < 768px
      result = totalPages;
    } else if (isTablet) {
      // > 768px > 1110px
      result = totalPages - 2;
    } else if (isMobile) {
      result = totalPages;
    } else {
      result = totalPages - 3;
    }
    return result;
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
      <div className="d-flex justify-content-between carouselTitle">
        <h4 className="h4-500 h4-mb">{title}</h4>
        {/* Esta div serve para que caso não haja um titulo, o componente de paginação continue sendo renderizado no canto direito */}
        {!title && <div></div>}
        {pages > 1 && !isMobile && (
          <div className="carousel-pagination-indicator">
            {Array.from({ length: handlePaginationSize() }, (_, index) => (
              <div
                key={index}
                className={`carousel-pagination ${
                  Math.floor(currentIndex) === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div style={{ width: "100%" }} className="d-flex carousel-align">
        {!isMobile && (
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
        )}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMoveCapture}
          onTouchEnd={handleTouchEnd}
          className="carousel-container"
        >
          <div
            className="carousel-items-container"
            style={{
              transform: `translateX(-${currentIndex * (231 + 19)}px)`,
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
        {!isMobile && (
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
        )}
      </div>
    </>
  );
}
