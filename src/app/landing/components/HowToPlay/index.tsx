import Badge1 from "@/assets/svg/Badge1";
import Badge2 from "@/assets/svg/Badge2";
import Badge3 from "@/assets/svg/Badge3";
import VerticalSpacing from "@/assets/svg/VerticalSpacing";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";

export default function HowToPlay() {
  return (
    <>
      <Body marginBottom="130px">
        <h4 className="h4-500 h4-mb">É easy demais</h4>
        <Card
          width="635px"
          height="119px"
          content={
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <Badge1 />
              </div>
              <h6 className="h6-400 ml-1">
                Crie a sua conta e entre na plataforma
              </h6>
            </div>
          }
        />
        <VerticalSpacing />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Card
            width="635px"
            height="119px"
            content={
              <div className="d-flex justify-content-center align-items-center h-100 mlr-3">
                <div>
                  <Badge2 />
                </div>
                <h6 className="h6-400 ml-1">
                  Escolha o jogo que você é god, encontre um adversário e aposte
                  um valor
                </h6>
              </div>
            }
          />
        </div>
        <VerticalSpacing />
        <Card
          width="635px"
          height="119px"
          content={
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <Badge3 />
              </div>
              <h6 className="h6-400 ml-1">
                Crie a sua conta e entre na plataforma
              </h6>
            </div>
          }
        />
      </Body>
    </>
  );
}
