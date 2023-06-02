import Accordion from "@/components/Accordion";
import { Body } from "@/components/Body";

export default function LandingPageFaq() {
  return (
    <Body marginBottom="60px">
      <Accordion
        style={{ margin: "10px" }}
        title="Pergunta frequente 1"
        content={
          <span>
            Resposta da pergunta frequente 1Resposta da pergunta frequente
            1Resposta da pergunta frequente 1 Resposta da pergunta frequente
            1Resposta da pergunta frequente 1Resposta da pergunta frequente 1
            Resposta da pergunta frequente 1Resposta da pergunta frequente
            1Resposta da pergunta frequente 1
          </span>
        }
      />
      <Accordion
        style={{ margin: "10px" }}
        title="Pergunta frequente 2"
        content={
          <span>
            Resposta da pergunta frequente 2Resposta da pergunta frequente 2
          </span>
        }
      />
      <Accordion
        style={{ margin: "10px" }}
        title="Pergunta frequente 3"
        content={<span>Resposta da pergunta frequente 3</span>}
      />
    </Body>
  );
}
