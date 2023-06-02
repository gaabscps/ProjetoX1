import { EmptyImageFooter } from "@/assets/svg/emptyImageFooter";

export function Footer() {
  return (
    <>
      <div className="footer-module">
        <div className="footer-container">
          <div className="d-flex footer-icon-container">
            <div className="mr-1">icone 1</div>
            <div className="mr-1">icone 2</div>
            <div className="mr-1">icone 3</div>
          </div>
          <div className="footer-image-margin">
            <EmptyImageFooter />
          </div>
          <div className="footer-institutional">
            <p className="text-small-400">
              Play X1, CNPJ: 000000000000000, Endereço
            </p>
            <p className="text-small-400">
              Todos os direitos reservados a Play X1
            </p>
          </div>
          <div className="footer-institutional">
            <p className="text-small-400">Fale conosco:</p>
            <p className="text-small-400">suporte@playx1.com.br</p>
          </div>

          <div className="d-flex justify-content-around w-100 footer-terms">
            <p className="text-small-400 color-black-6">Termos de uso</p>
            <p className="text-small-400 color-black-6">Privacidade</p>
          </div>
        </div>
      </div>
    </>
  );
}
