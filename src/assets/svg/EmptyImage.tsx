interface EmptyImageProps {
  className?: string;
}

export const EmptyImage = ({ className }: EmptyImageProps) => {
  return (
    <svg
      width="72"
      height="32"
      viewBox="0 0 72 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.8973 10.8973C31.9065 10.8973 34.346 8.45785 34.346 5.44865C34.346 2.43944 31.9065 0 28.8973 0C25.8881 0 23.4487 2.43944 23.4487 5.44865C23.4487 8.45785 25.8881 10.8973 28.8973 10.8973ZM0 31.2538L18 13.2539L27.4378 22.6917L45.4378 4.69169L72 31.2538H0Z"
        fill="#7A7786"
      />
    </svg>
  );
};
