import React, { FC, ReactNode, useState } from "react";

interface HoverContextProps {
  children: ReactNode;
  hoverText: string;
}

const HoverContext: FC<HoverContextProps> = ({ children, hoverText }) => {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <div
      className="relative !underline underline-offset-4 decoration-dashed cursor-help"
      onMouseEnter={() => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={() => {
        setStyle({ display: "none" });
      }}
    >
      {children}
      <div
        style={style}
        className="absolute bg-white px-3 lg:px-8 py-4 shadow-md top-12  rounded-md z-50 text-sm w-80"
      >
        {hoverText}
      </div>
    </div>
  );
};

export default HoverContext;
