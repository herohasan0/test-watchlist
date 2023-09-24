import React, { ChangeEvent } from "react";

type InputType = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input({ value, onChange, placeholder }: InputType) {
  return (
    <input
      value={value}
      type="text"
      onChange={onChange}
      className="rounded h-[40px] pl-4 text-base outline-0 focus:outline-1 focus:outline-heroic-blue disabled:bg-insiderTheme-Greys/border border border-insiderTheme-Greys/border bg-[#F7F9FA] placeholder:text-[15px]"
      placeholder={placeholder}
    />
  );
}
