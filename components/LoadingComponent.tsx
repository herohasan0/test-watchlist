export function LoadingComponent({ mainColor = "#5951FF" }) {
  return (
    <svg
      style={{ stroke: mainColor }}
      className="w-16 h-16 mx-auto"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner">
        <circle cx="12" cy="12" r="8" fill="none" strokeWidth="2" />
      </g>
    </svg>
  );
}
