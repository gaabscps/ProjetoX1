interface CardProps {
  content: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  borderRadius?: string;
  background?: any;
  theme?: "outline" | "filled" | "dotted";
  onClick?: () => void;
}

export function Card({
  content,
  width,
  height,
  color,
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
        backgroundImage: background ? `url(${background})` : "none",
        borderRadius: borderRadius,
        borderColor: color,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`cardContainer card-${theme || ""} ${
        onClick ? "action-icon" : ""
      }`}
    >
      <div className="w-100 h-100">{content}</div>
    </div>
  );
}
