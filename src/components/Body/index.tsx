interface BodyProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}
export function Body({ children, className }: BodyProps) {
  return (
    <div
      className={`${className}`}
      style={{
        maxWidth: "1110px",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "80px",
      }}
    >
      {children}
    </div>
  );
}
