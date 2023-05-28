import { EmptyUser } from "@/assets/svg/EmptyUser";

export function StatsSection() {
  return (
    <>
      <div className="statsSectionModule">
        <div className="d-flex align-items-center stats-flex">
          <div className="statsSectionContainer align-items-center">
            <div>Confira os resultados da PLAY X1 e faça parte você também</div>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <span className="statsTitle">+2 mil</span>
                <span className="statsDescription">Usuários ativos</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <span className="statsTitle">+10</span>
                <span className="statsDescription">Jogos na plataforma</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-1">
                <EmptyUser />
              </div>
              <div className="d-flex flex-column">
                <span className="statsTitle">+R$ 2 milhões</span>
                <span className="statsDescription">
                  Movimentados na plataforma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
