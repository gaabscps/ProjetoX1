import { Button } from "@/components/Button";
import Image from "next/image";
import { Element } from "react-scroll";
import logo from "@/assets/svg/X1_logo_horizontal_branco 3.svg";

interface VideoSectionProps {
  setOpenRegister: (open: boolean) => void;
}

export function VideoSection({ setOpenRegister }: VideoSectionProps) {
  return (
    <Element name="home">
      <section id="videoSection" className="videoSection">
        <video
          src="https://drive.google.com/uc?export=download&id=19AuvmqPNNJeyfZE2wh8LJ9iJePJ9Jk3r"
          className="background-video"
          autoPlay
          loop
          muted
        >
          {/* <source
            src={
              "https://drive.google.com/uc?export=download&id=19AuvmqPNNJeyfZE2wh8LJ9iJePJ9Jk3r"
            }
            type="video/mp4"
          /> */}
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>
        <div className="centered-content">
          <div className="videoSectionText">
            <span style={{ fontSize: "16px" }} className="text-normal-500">
              Desafie. Aposte. Vença. Mostre ao mundo do que você é capaz.
            </span>
          </div>
          <Image className="videoTitle" src={logo} alt="Logo Play X1" />
          <Button
            onClick={() => setOpenRegister(true)}
            effect
            size="large"
            content="Criar a minha conta"
          />
        </div>
      </section>
    </Element>
  );
}
