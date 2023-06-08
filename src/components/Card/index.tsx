interface CardProps {
  content: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: any;
  theme?: "outline" | "filled" | "dotted";
  onClick?: () => void;
}

export function Card({
  content,
  width,
  height,
  borderRadius = "10px",
  background,
  theme = "filled",
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: width || 0,
        height: height || 0,
        backgroundImage: `url(${background})`,
        borderRadius: borderRadius,
      }}
      className={`cardContainer card-${theme} ${onClick ? "action-icon" : ""}`}
    >
      <div className="w-100 h-100">{content}</div>
    </div>
  );
}
