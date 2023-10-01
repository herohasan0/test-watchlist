import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="shadow-md bg-white rounded-2xl p-8 w-full ">{children}</div>
  );
};

export default Container;
