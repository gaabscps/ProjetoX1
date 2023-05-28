interface EmptyUserProps {
  backgroundColor?: string;
}

export function EmptyUser({ backgroundColor }: EmptyUserProps) {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="21.5"
        cy="21.5"
        r="21.5"
        fill={(backgroundColor = backgroundColor || "#5F5C6B")}
      />
      <path
        d="M25.8182 29.5455V27.8182C25.8182 26.902 25.4542 26.0233 24.8064 25.3755C24.1585 24.7276 23.2798 24.3636 22.3636 24.3636H15.4545C14.5383 24.3636 13.6597 24.7276 13.0118 25.3755C12.364 26.0233 12 26.902 12 27.8182V29.5455"
        stroke="white"
        stroke-width="1.45739"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.9093 20.9091C20.8172 20.9091 22.3638 19.3624 22.3638 17.4545C22.3638 15.5467 20.8172 14 18.9093 14C17.0014 14 15.4547 15.5467 15.4547 17.4545C15.4547 19.3624 17.0014 20.9091 18.9093 20.9091Z"
        stroke="white"
        stroke-width="1.45739"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31 29.5455V27.8182C30.9994 27.0528 30.7446 26.3092 30.2757 25.7043C29.8067 25.0993 29.1502 24.6673 28.4091 24.4759"
        stroke="white"
        stroke-width="1.45739"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.9546 14.1123C25.6977 14.3025 26.3563 14.7347 26.8266 15.3406C27.297 15.9466 27.5523 16.6918 27.5523 17.4589C27.5523 18.2259 27.297 18.9712 26.8266 19.5771C26.3563 20.183 25.6977 20.6152 24.9546 20.8055"
        stroke="white"
        stroke-width="1.45739"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
