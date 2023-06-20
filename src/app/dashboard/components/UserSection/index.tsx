import EmptyUserDashboard from "@/assets/svg/EmptyUserDashboard";
import { Body } from "@/components/Body";

export default function UserSection() {
  return (
    <Body>
      <div className="d-flex align-items-center mb-3">
        <EmptyUserDashboard />
        <div className="ml-1 w-100">
          <p style={{ marginBottom: "26px" }}>Alex da Silva Almeida Junior</p>
          <div className="d-flex w-100 justify-content-between">
            <span className="color-black-7">10 seguidores</span>
            <span className="color-black-7">15 seguindo</span>
            <span className="color-black-7">10x que desafiou</span>
            <span className="color-black-7">5x que foi desafiado</span>
            <span className="color-black-7">{`//`}</span>
            <span className="color-black-7">5 jogos realizados</span>
            <span className="color-black-7">2 vitórias</span>
            <span className="color-black-7">3 derrotas</span>
          </div>
        </div>
      </div>
    </Body>
  );
}
