import Accordion from "@/components/Accordion";

export default function ModalAddGameBody() {
  return (
    <div className="addGameModalBody d-flex flex-column justify-content-between">
      <div>
        <div className="w-100 mb-2">
          <h6 style={{ marginBottom: "10px" }} className="h6-500">
            Adicionar jogo
          </h6>
          <span className="color-black-6">
            Selecione o(s) jogo(s) que você quer adicionar e depois o rank
          </span>
        </div>
        <div>
          <Accordion
            style={{ marginBottom: "20px" }}
            title={"Valorant"}
            content={
              <div className="addGameContent">
                <p className="rankTitle">Rank</p>
                <ul>
                  <li className="rankItem">
                    <input type="radio" /> Iniciante
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Intermediário
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Profissional
                  </li>
                </ul>
              </div>
            }
          />
          <Accordion
            style={{ marginBottom: "20px" }}
            title={"Valorant"}
            content={
              <div className="addGameContent">
                <p className="rankTitle">Rank</p>
                <ul>
                  <li className="rankItem">
                    <input type="radio" /> Iniciante
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Intermediário
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Profissional
                  </li>
                </ul>
              </div>
            }
          />
          <Accordion
            style={{ marginBottom: "20px" }}
            title={"Valorant"}
            content={
              <div className="addGameContent">
                <p className="rankTitle">Rank</p>
                <ul>
                  <li className="rankItem">
                    <input type="radio" /> Iniciante
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Intermediário
                  </li>
                  <li className="rankItem">
                    <input type="radio" /> Profissional
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
      <div>
        <p className="text-center color-black-6 line-height-150">
          Ao adicionar um jogo, você concorda com os nossos
        </p>
        <p className="text-center line-height-150"> Termos e Condições</p>
      </div>
    </div>
  );
}
