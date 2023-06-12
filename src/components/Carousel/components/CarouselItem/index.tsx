import React from "react";

interface CarouselItemProps {
  item: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <div className="carousel-item-wrapper h-100" style={{ color: "black" }}>
      {item}
    </div>
  );
};
