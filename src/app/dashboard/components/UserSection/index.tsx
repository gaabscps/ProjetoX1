import EmptyUserDashboard from "@/assets/svg/EmptyUserDashboard";
import { Body } from "@/components/Body";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { useState } from "react";
import Image from "next/image";
import gabs from "@/assets/svg/gabs.jpg";

export default function UserSection() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [onHover, setOnHover] = useState(false);

  return (
    <Body>
      <div className="d-flex align-items-center mb-3">
        <div
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={{ position: "relative" }}
        >
          {/* Barra de progressão de level */}
          <div
            style={{
              position: "absolute",
              width: "176px",
              top: "-13px",
              left: "-8px",
            }}
          >
            <Pie
              data={{
                datasets: [
                  {
                    //Exp ativo, exp inativo, tamanho tag
                    data: [80, 10, 10],
                    backgroundColor: ["#963BFF", "#464448", "transparent"],
                    borderWidth: 0,
                    rotation: 199,
                  },
                ],
              }}
            />
          </div>

          <div className="levelTag">23</div>
          <div
            className={`levelStats ${
              onHover ? "levelStatsHover" : "levelStatsOff"
            }`}
          >
            <p style={{ marginBottom: "5px", marginTop: "3px" }}>70%</p>
            <p>7.000/10.000 </p>
          </div>

          <div className="profilePicture" style={{ position: "relative" }}>
            <Image className="profilePicture" src={gabs} alt="profile" />
          </div>
        </div>
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
