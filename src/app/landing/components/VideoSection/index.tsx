import { Button } from "@/components/Button";

interface VideoSectionProps {
  setOpenRegister: (open: boolean) => void;
}

export function VideoSection({ setOpenRegister }: VideoSectionProps) {
  return (
    <section id="videoSection" className="videoSection">
      <video className="background-video" autoPlay loop muted>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
      <div className="centered-content">
        <div className="videoSectionText">
          <span style={{ fontSize: "16px" }} className="text-normal-500">
            Desafie. Aposte. Vença. Mostre ao mundo do que você é capaz.
          </span>
        </div>
        <h4 className="h4-500 videoTitle">PLAY X1 (logo)</h4>
        <Button
          onClick={() => setOpenRegister(true)}
          effect
          size="large"
          content="Criar a minha conta"
        />
      </div>
    </section>
  );
}
