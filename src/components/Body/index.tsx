interface BodyProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  marginBottom?: string;
  marginTop?: string;
}
export function Body({
  children,
  className,
  marginBottom,
  marginTop,
}: BodyProps) {
  return (
    <div
      className={`${className || ""}`}
      style={{
        position: "relative",
        maxWidth: "1110px",
        margin: "0 auto",
        marginBottom: marginBottom || "0px",
        marginTop: marginTop || "0px",
      }}
    >
      {children}
    </div>
  );
}
