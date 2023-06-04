import React from "react";

interface CarrosselItemProps {
  item: string;
}

export const CarouselItem: React.FC<CarrosselItemProps> = ({ item }) => {
  return <div style={{ color: "black" }}>{item}</div>;
};
