import { Dollar } from "@/assets/svg/Dollar";
import { EmptyUser } from "@/assets/svg/EmptyUser";
import { Medal } from "@/assets/svg/Medal";
import { Shield } from "@/assets/svg/Shield";
import { LandingEffect } from "@/assets/svg/landingEffect";
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
      description: "Desafie, vença e receba seu pagamento na hora",
      image: <Dollar />,
    },
    {
      title: "Aposta segura",
      description: "Aposte com confiança total. Segurança garantida",
      image: <Shield />,
    },
    {
      title: "Placar de liderança",
      description: "Seja o melhor! Acompanhe o placar de líderes",
      image: <Medal />,
    },
  ];

  return (
    <Body marginBottom="50px">
      <h4 className="h4-500 h4-mb">Tudo o que você precisa</h4>
      <div className="d-flex flex-gap-2">
        {featuresMock.map((item, index) => (
          <Card
            key={index}
            width="350px"
            height="260px"
            content={
              <div className="d-flex flex-column align-items-center justify-content-center h-100 featuresContainer">
                <div>{item.image}</div>
                <h6 className="h6-400 featuresH6Margin">{item.title}</h6>
                <span className="text-center color-black-7 text-normal-400 mlr-3 line-height-150">
                  {item.description}
                </span>
              </div>
            }
          />
        ))}
        <LandingEffect />
      </div>
    </Body>
  );
}
