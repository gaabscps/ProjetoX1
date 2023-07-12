interface BodyProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  marginBottom?: string;
  marginTop?: string;
  carousel?: boolean;
  small?: boolean;
}
export function Body({
  children,
  className,
  marginBottom,
  marginTop,
  carousel,
  small,
}: BodyProps) {
  return (
    <section
      className={`${className || ''} ${
        carousel ? 'carouselSectionBody' : 'sectionBody'
      } ${small ? 'smallSectionBody' : ''
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
