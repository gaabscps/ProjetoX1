import React, { useState } from "react";
import { CarouselItem } from "./components/CarouselItem";
import { LeftArrow } from "@/assets/svg/LeftArrow";
import { RightArrow } from "@/assets/svg/RightArrow";

interface CarouselProps {
  items: any[];
  title?: string;
}

export function Carrossel({ items, title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const totalPages = Math.ceil(items.length / 4); // Calcula o número total de páginas

  const visibleItems = items;

  const emptyItems = 4 - visibleItems.length;

  for (let i = 0; i < emptyItems; i++) {
    visibleItems.push(null);
  }

  return (
    <>
      <div className="d-flex justify-content-between carouselTitle">
        <h4 className="h4-500">{title}</h4>
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
        <button className="carousel-button left" onClick={handlePrev}>
          <LeftArrow />
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
            <div className="carouselVisibleItem">
              {visibleItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  <div className="carousel-item-wrapper">
                    {item ? (
                      <CarouselItem item={item} />
                    ) : (
                      <div className="empty-item" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          <RightArrow />
        </button>
      </div>
    </>
  );
}
