import { Button } from "@/components/Button";

export function VideoSection() {
  return (
    <section className="videoSection">
      <video className="background-video" autoPlay loop muted>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
      <div className="centered-content">
        <div>
          <span>Prove que você é o melhor e seja muito recompesado</span>
        </div>
        <h1>PLAY X1 (logo)</h1>
        <Button theme="large" content="Criar a minha conta" />
      </div>
    </section>
  );
}
