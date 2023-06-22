import { Facebook } from "@/assets/svg/Facebook";
import { Instagram } from "@/assets/svg/Instagram";
import { Youtube } from "@/assets/svg/Youtube";
import Image from "next/image";
import logo from "@/assets/svg/X1_logo_horizontal_branco 3.png";

export function Footer() {
  return (
    <>
      <footer className="footer-module">
        <div className="footer-container">
          <div className="d-flex footer-icon-container justify-content-between align-items-center">
            <button className="action-icon">
              <Instagram />
            </button>
            <button className="action-icon">
              <Youtube />
            </button>
            <button className="action-icon">
              <Facebook />
            </button>
          </div>
          <div className="footer-image-margin">
            <Image src={logo} alt="" />
          </div>
          <div className="footer-institutional">
            <p style={{ marginBottom: "9px" }} className="text-small-400">
              Play X1, CNPJ: 000000000000000, Endereço
            </p>
            <p className="text-small-400">
              Todos os direitos reservados a Play X1
            </p>
          </div>
          <div className="footer-institutional">
            <p style={{ marginBottom: "6px" }} className="text-small-400">
              Fale conosco:
            </p>
            <p className="text-small-400">suporte@playx1.com.br</p>
          </div>

          <div className="d-flex justify-content-around w-100 footer-terms">
            <a className="text-small-400 color-black-6 action-icon">
              Termos de uso
            </a>
            <a className="text-small-400 color-black-6 action-icon">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
