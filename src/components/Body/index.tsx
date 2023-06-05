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
    <section
      className={`${className || ""} sectionBody`}
      style={{
        marginBottom: marginBottom || "0px",
        marginTop: marginTop || "0px",
      }}
    >
      {children}
    </section>
  );
}
