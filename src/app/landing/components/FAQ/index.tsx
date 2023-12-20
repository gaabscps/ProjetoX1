import Accordion from '@/components/Accordion'
import { Body } from '@/components/Body'
import { Element } from 'react-scroll'

export default function LandingPageFaq() {
  type Content = {
    accordionTitle: string
    accordionContent: string
  }
  const content: Content[] = [
    {
      accordionTitle: 'O que é a PlayX1?',
      accordionContent:
        'PlayX1 facilita torneios de videogame baseados em habilidades e confrontos diretos por prêmios em dinheiro. Todos os principais consoles, PCs e dispositivos móveis são suportados, bem como os videogames mais populares com base em habilidades.',
    },
    {
      accordionTitle: 'A PlayX1 é segura?',
      accordionContent: 'Levamos a segurança muito a sério no PlayX1. Nosso sistema está protegido por um firewall de força industrial. Todos os dados confidenciais são transmitidos por meio de criptografia de alto nível de 256 bits para proteção contra interceptação. Todas as nossas transações financeiras são realizadas pela Rede, líder em sistemas de pagamento online.',
    },
    {
      accordionTitle: 'Custa alguma coisa para se inscrever na playx1.gg?',
      accordionContent: 'A inscrição na PlayX1 é 100% gratuita e não há cobrança de assinatura mensal.',
    },
    {
      accordionTitle: 'Como funciona a PlayX1?',
      accordionContent: 'A PlayX1 funciona como uma casa de custódia para jogadores online organizarem torneios e disputas frente a frente. Assim que um torneio ou disputa for aceito por ambos os membros, o dinheiro de ambas as contas será automaticamente depositado em nossa conta de garantia segura. Após o jogo online ter sido jogado, os resultados terem sido relatados e verificados por cada jogador, a conta do vencedor será automaticamente creditada.',
    },
    {
      accordionTitle: 'Quais jogos a PlayX1 oferece suporte?',
      accordionContent: 'Se você puder jogar um confronto direto online e for um jogo de habilidade, não de sorte, então nós apoiamos! Uma lista de todos os nossos jogos disponíveis pode ser encontrada na seção "Jogos disponíveis" na nossa página inicial. Também estamos sempre abertos a sugestões. Se você não encontrar um jogo que deseja jogar listado, basta entrar em contato conosco e nós o adicionaremos para você.',
    },
    {
      accordionTitle: 'Quais consoles são aceitos dentro da PlayX1?',
      accordionContent: 'A PlayX1 oferece suporte aos seguintes consoles: Xbox One, Xbox Series S e X, PS4 e PS5, PC e Mobile',
    },
    {
      accordionTitle: 'Quando custa jogar na PlayX1?',
      accordionContent: 'Os confrontos diretos possuem um valor mínimo de R$ 5,00 por desafio e contam uma taxa de serviço fixa de 10%. Todos as disputas online de consoles, PC e mobile têm entradas e prêmios definidos. As taxas de serviço ajudam o site a funcionar sem problemas e oferecem toda segurança necessária para o seu dinheiro',
    },
    {
      accordionTitle: 'Custa alguma coisa para se inscrever na playx1.gg?',
      accordionContent: 'A inscrição na PlayX1 é 100% gratuita e não há cobrança de assinatura mensal.',
    },
    {
      accordionTitle: 'Quantos anos preciso ter para me cadastrar na PlayX1?',
      accordionContent: 'Você deve ter 18 anos ou mais para se tornar um membro da Playx1.gg',
    },
    {
      accordionTitle: 'Por que meu saldo disponível é menor que meu saldo real?',
      accordionContent: 'Assim que você envia um desafio a outro usuário, esses fundos ficam indisponíveis para serem usados ​​em outras disputas. Depois que um desafio for enviado, você terá duas opções. Você pode prosseguir com a configuração da partida e jogar ou pode cancelar o desafio enviando desde que ele não tenha sido aceito. Os desafios enviados podem ser cancelados na Minha Arena e desafios enviados.',
    },
    {
      accordionTitle: 'Como deposito dinheiro em minha conta PlayX1.gg?',
      accordionContent: 'A única maneira de fazer um deposito na PlayX1 é via PIX, tendo que ser feito diretamente da conta bancaria do mesmo titular cadastrado na PlayX1.',
    },
    {
      accordionTitle: 'Como faço um saque de dinheiro da minha conta PlayX1??',
      accordionContent: 'O saque de dinheiro, funciona via Pix, tendo que ser uma chave do mesmo titular cadastrado na PlayX1, os saques tem um de tempo de espera de 1 minuto a 48 horas.',
    },
    {
      accordionTitle: 'A PlayX1 possui taxas de déposito e saque?',
      accordionContent: 'Não possuimos nenhuma taxa para depositos, porém para cada saque realizado, temos uma taxa fixa de R$ 5,00',
    },
    {
      accordionTitle: 'Posso ter mais de uma conta?',
      accordionContent: 'Não! Nossa política é apenas uma conta por CPF.',
    },
    {
      accordionTitle: 'Estou em uma disputa e minha conexão ou energia caiu. O que acontece?',
      accordionContent: 'Lamentamos o ocorrido, mas por regra, quaisquer disputa que tenham uma interfêrencia externa desses temas é dada como perdida.',
    }
  ]

  return (
    <Element name='faq'>
      <Body marginBottom='60px'>
        <h4 className='h4-500 h4-mb'>Perguntas frequentes</h4>
        {content.map((item, index) => (
          <Accordion
            key={index}
            style={{ margin: '20px 0' }}
            title={item.accordionTitle}
            content={<span className='faqContent color-black-7'>{item.accordionContent}</span>}
          />
        ))}
      </Body>
    </Element>
  )
}
