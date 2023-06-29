import Accordion from '@/components/Accordion';
import { Body } from '@/components/Body';
import { Element } from 'react-scroll';

interface LandingPageFaqProps {}

export default function LandingPageFaq({}: LandingPageFaqProps) {
  type Content = {
    accordionTitle: string;
    accordionContent: string;
  };
  const content: Content[] = [
    {
      accordionTitle: 'Pergunta frequente 1',
      accordionContent:
        ' RespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaRespostaResposta ',
    },
    {
      accordionTitle: 'Pergunta frequente 2',
      accordionContent: 'Resposta',
    },
    {
      accordionTitle: 'Pergunta frequente 3',
      accordionContent: 'Resposta da Pergunta frequente 3',
    },
  ];

  return (
    <Element name="faq">
      <Body marginBottom="60px">
        <h4 className="h4-500 h4-mb">Perguntas frequentes</h4>
        {content.map((item, index) => (
          <Accordion
            key={index}
            style={{ margin: '20px 0' }}
            title={item.accordionTitle}
            content={
              <span className="faqContent color-black-7">
                {item.accordionContent}
              </span>
            }
          />
        ))}
      </Body>
    </Element>
  );
}
