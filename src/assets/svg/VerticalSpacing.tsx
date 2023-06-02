export default function VerticalSpacing() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg
        width="6"
        height="30"
        viewBox="0 0 6 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="30"
          width="30"
          height="6"
          transform="rotate(-90 0 30)"
          fill="url(#paint0_linear_372_1573)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_1573"
            x1="-6.70008e-07"
            y1="33.0481"
            x2="29.9901"
            y2="33.5924"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#963BFF" />
            <stop offset="0.479167" stop-color="#963BFF" stop-opacity="0.5" />
            <stop offset="1" stop-color="#963BFF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
