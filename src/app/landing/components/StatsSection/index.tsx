/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";

export function StatsSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const duration = Math.max(2000 * (windowWidth / 1920), 2000); // Adjust the divisor (1920) as needed

    const animation = textRef?.current?.animate(
      [{ transform: "translateX(0%)" }, { transform: `translateX(-230px)` }],
      {
        duration,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation?.cancel();
  }, [windowWidth]);

  useEffect(() => {
    const duration = Math.max(2000 * (windowWidth / 1920), 2000); // Adjust the divisor (1920) as needed

    const animation = textRef2?.current?.animate(
      [{ transform: `translateX(-230px)` }, { transform: "translateX(0%)" }],
      {
        duration,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation?.cancel();
  }, [windowWidth]);

  return (
    <div style={{ overflow: "hidden", margin: "60px 0" }}>
      {/* first line */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          whiteSpace: "nowrap",
        }}
        ref={textRef}
      >
        {Array.from({ length: 20 }, () => (
          <h3 style={{ width: "fit-content" }} className="h3-text-animation">
            PLAY X1
          </h3>
        ))}
      </div>

      {/* second line */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          whiteSpace: "nowrap",
        }}
        ref={textRef2}
      >
        {Array.from({ length: 20 }, () => (
          <h3
            style={{
              width: "fit-content",
              color: "#29272a",
              // WebkitTextStroke: "1px #3E3B3F",
              textShadow:
                "-0.7px -0.7px 0 #3E3B3F, 0.7px -0.7px 0 #3E3B3F, -0.7px 0.7px 0 #3E3B3F, 0.7px 0.7px 0 #3E3B3F" /* Contorno */,
            }}
            className="h3-text-animation-outline"
          >
            PLAY X1
          </h3>
        ))}
      </div>
    </div>
  );
}
