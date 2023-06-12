import React, { useRef, useState } from "react";
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
  isBanner?: boolean;
}

export function Carrossel({
  items,
  title,
  centerButton,
  isBanner,
}: CarouselProps) {
  const isTablet = useTabletHook();
  const isMobile = useMobileHook();
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  // Funções para lidar com drag n' drop do carrossel em tempo real
  const handleTouchStarts = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const translate = prevTranslate + x - startX;

    const carouselWidth = carouselRef.current?.offsetWidth || 0;
    const innerWidth = carouselRef.current?.scrollWidth || 0;
    const maxTranslate = carouselWidth - innerWidth;

    if (translate > 0) {
      setCurrentTranslate(0);
    } else if (translate < maxTranslate) {
      setCurrentTranslate(maxTranslate);
    } else {
      setCurrentTranslate(translate);
    }
  };

  const handleTouchEnds = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };
  // Fim das funções para lidar com drag n' drop do carrossel em tempo real

  // Funções para lidar com o carrossel de banners

  const handleTouchStartBanner = (event: React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMoveCaptureBanner = (event: React.TouchEvent) => {
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

  const handleTouchEndBanner = () => {
    document.body.style.overflow = "auto";
  };

  // Fim das funções para lidar com o carrossel de banners

  // Funções proximo e anterior do carrossel
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
          newIndex = items.length - 3;
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
          newIndex = 0;
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

  // Fim das funções proximo e anterior do carrossel

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
        {pages > 1 && !isMobile && !isTablet && (
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
          ref={carouselRef}
          onTouchStart={isBanner ? handleTouchStartBanner : handleTouchStarts}
          onTouchMove={
            isBanner ? handleTouchMoveCaptureBanner : handleTouchMove
          }
          onTouchEnd={isBanner ? handleTouchEndBanner : handleTouchEnds}
          className="carousel-container"
        >
          <div
            className="carousel-items-container"
            style={{
              transform: `translateX(-${currentIndex * (231 + 19)}px)`,
            }}
          >
            <ul
              style={{
                transform:
                  isMobile || isTablet
                    ? `translateX(${1.2 * currentTranslate + 20}px)`
                    : `translateX(${currentTranslate}px)`,
                transition: isDragging ? "none" : "transform 0.3s",
              }}
              className="carouselVisibleItem"
            >
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
