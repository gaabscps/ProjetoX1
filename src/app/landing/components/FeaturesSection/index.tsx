import { EmptyUser } from "@/assets/svg/EmptyUser";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";

export function FeaturesSection() {
  type features = {
    title: string;
    description: string;
    image: JSX.Element;
  };

  const featuresMock: features[] = [
    {
      title: "Pagamento instantâneo",
      description: "Descrição desse benefício de pagamento instantâneo",
      image: <EmptyUser backgroundColor="#8c8a9766" />,
    },
    {
      title: "Aposta segura",
      description: "Descrição desse benefício de aposta segura",
      image: <EmptyUser backgroundColor="#8c8a9766" />,
    },
    {
      title: "Placar de liderança",
      description: "Descrição desse benefício de placar de liderança",
      image: <EmptyUser backgroundColor="#8c8a9766" />,
    },
  ];

  return (
    <Body className="d-flex flex-gap-2">
      {featuresMock.map((item, index) => (
        <Card
          key={index}
          width="350px"
          height="260px"
          content={
            <div className="d-flex flex-column cardContent">
              <div style={{ marginTop: "50px" }}>{item.image}</div>
              <span className="text-large-ff mb-1">{item.title}</span>
              <span className="text-center text-regular-b6 mlr-3">
                {item.description}
              </span>
            </div>
          }
        />
      ))}
    </Body>
  );
}
