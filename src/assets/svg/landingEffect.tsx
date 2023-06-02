import { Body } from "@/components/Body";

export function LandingEffect() {
  return (
    <div
      style={{
        position: "absolute",
        left: "303px",
        top: "40px",
        zIndex: "-1",
      }}
    >
      <svg
        width="504"
        height="504"
        viewBox="0 0 504 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="252.75"
          cy="252.75"
          r="150"
          stroke="#963BFF"
          stroke-opacity="0.5"
          stroke-width="1.5"
        />
        <circle
          cx="252"
          cy="252"
          r="207.75"
          stroke="#963BFF"
          stroke-opacity="0.2"
          stroke-width="1.5"
        />
        <circle
          cx="252"
          cy="252"
          r="251.25"
          stroke="#963BFF"
          stroke-opacity="0.1"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
}
