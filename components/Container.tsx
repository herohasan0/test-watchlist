import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="shadow-md bg-white rounded-2xl p-8 w-full">{children}</div>
  );
}
