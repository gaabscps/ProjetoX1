interface CardProps {
  content: React.ReactNode;
  width?: string;
  height?: string;
}

export function Card({ content, width, height }: CardProps) {
  return (
    <div
      style={{ width: width || 0, height: height || 0 }}
      className="cardContainer"
    >
      <div className="w-100 h-100">{content}</div>
    </div>
  );
}
