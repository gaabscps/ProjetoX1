import Badge1 from "@/assets/svg/Badge1";
import Badge2 from "@/assets/svg/Badge2";
import Badge3 from "@/assets/svg/Badge3";
import VerticalSpacing from "@/assets/svg/VerticalSpacing";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import jett from "@/assets/svg/card-jett.svg";
import vayne from "@/assets/svg/card-vayne.svg";
import cs from "@/assets/svg/card-cs.svg";

export default function HowToPlay() {
  type Content = {
    text: string;
    badge: JSX.Element;
    background?: string;
  };

  const content: Content[] = [
    {
      text: "Crie a sua conta e entre na plataforma",
      badge: <Badge1 />,
      background: jett.src,
    },
    {
      text: "Escolha o jogo que você é god, encontre um adversário e aposte um valor",
      badge: <Badge2 />,
      background: vayne.src,
    },
    {
      text: "Vença a partida e saia com a grana no bolso",
      badge: <Badge3 />,
      background: cs.src,
    },
  ];

  return (
    <>
      <Body marginBottom="130px">
        <h4 className="h4-500 h4-mb">É easy demais</h4>

        {content.map((item: Content, index) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: index === 1 ? "end" : "start",
              }}
            >
              <Card
                key={index}
                background={item.background}
                width="635px"
                height="119px"
                content={
                  <div className="d-flex justify-content-center align-items-center h-100 mlr-3">
                    <div style={{ height: "41px" }}>{item.badge}</div>
                    <h6 className="h6-400 ml-1 line-height-150">{item.text}</h6>
                  </div>
                }
              />
            </div>
            <div style={{ marginRight: "25px" }}>
              {index < content.length - 1 && <VerticalSpacing />}
            </div>
          </>
        ))}
      </Body>
    </>
  );
}
