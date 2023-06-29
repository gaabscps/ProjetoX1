interface BodyProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  marginBottom?: string;
  marginTop?: string;
  carousel?: boolean;
}
export function Body({
  children,
  className,
  marginBottom,
  marginTop,
  carousel,
}: BodyProps) {
  return (
    <section
      className={`${className || ''} ${
        carousel ? 'carouselSectionBody' : 'sectionBody'
      }`}
      style={{
        marginBottom: marginBottom || '0px',
        marginTop: marginTop || '0px',
      }}
    >
      {children}
    </section>
  );
}
