import React, { FC } from "react";
import { ContainerProps } from "@/repo/main";

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="shadow-md bg-white rounded-2xl p-8 w-full ">{children}</div>
  );
};

export default Container;
