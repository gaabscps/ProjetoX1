interface CardProps {
  content: React.ReactNode;
  width?: string;
  height?: string;
  background?: any;
  theme?: "outline" | "filled";
}

export function Card({
  content,
  width,
  height,
  background,
  theme = "filled",
}: CardProps) {
  return (
    <div
      style={{
        width: width || 0,
        height: height || 0,
        backgroundImage: `url(${background})`,
      }}
      className={`cardContainer card-${theme}`}
    >
      <div className="w-100 h-100">{content}</div>
    </div>
  );
}
