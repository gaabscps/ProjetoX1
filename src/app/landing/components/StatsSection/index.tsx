import { EmptyUser } from "@/assets/svg/EmptyUser";
import { Body } from "@/components/Body";

export function StatsSection() {
  return (
    <>
      <Body className="statsSectionModule">
        <div className="d-flex align-items-center stats-flex">
          <div className="statsSectionContainer align-items-center">
            <p className="text-normal-400 line-height-150">
              Confira os resultados da PLAY X1 e faça parte você também
            </p>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <h6 className="statsTitle h6-400">+2 mil</h6>
                <p className="statsDescription text-normal-400">
                  Usuários ativos
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <h6 className="statsTitle h6-400">+10</h6>
                <p className="statsDescription text-normal-400">
                  Jogos na plataforma
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <h6 className="statsTitle h6-400">+R$ 2 milhões</h6>
                <p className="statsDescription text-normal-400">
                  Movimentados na plataforma
                </p>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}
